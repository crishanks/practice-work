require "yaml"

def load_yaml file
    emoticons = YAML.load_file(file)
end

def get_japanese_emoticon yaml_file, emoticon
    dictionary = load_yaml(yaml_file)
    dictionary["get_emoticon"].each do |english_emoji, japanese_emoji|
        if english_emoji == emoticon
            return japanese_emoji
        end
    end
    "Sorry, that emoticon wasn't found."
end

def get_english_meaning yaml_file, emoticon
    dictionary = load_yaml(yaml_file)
    dictionary[get_meaning:].each do |japanese_emoji, english_meaning|
        if japanese_emoji == emoticon
            return english_meaning
        end
    end
    "Sorry, that emoticon wasn't found."
end