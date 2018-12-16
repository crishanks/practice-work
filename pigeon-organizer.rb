pigeon_data = {
  :color => {
    :purple => ["Theo", "Peter Jr.", "Lucky"],
    :grey => ["Theo", "Peter Jr.", "Ms. K"],
    :white => ["Queenie", "Andrew", "Ms. K", "Alex"],
    :brown => ["Queenie", "Alex"]
  },
  :gender => {
    :male => ["Alex", "Theo", "Peter Jr.", "Andrew", "Lucky"],
    :female => ["Queenie", "Ms. K"]
  },
  :lives => {
    "Subway" => ["Theo", "Queenie"],
    "Central Park" => ["Alex", "Ms. K", "Lucky"],
    "Library" => ["Peter Jr."],
    "City Hall" => ["Andrew"]
  }
}

def format_data pigeon_data
  reformatted_pigeon_data = {}
  pigeon_data[:gender].each do |gender_key, name_array|
    name_array.each do |name|
      reformatted_pigeon_data[name] = {:color => [], :gender => [], :lives => []}
    end
  end
  reformatted_pigeon_data
end

def insert_color pigeon_data
  formatted_pigeon_data = format_data(pigeon_data)
  name_keys = formatted_pigeon_data.keys

  pigeon_data[:color].each do |color_key, name_array|
    name_array.each do |name|
      name_keys.each do |item|
        if name == item
          formatted_pigeon_data[name][:color] << color_key.to_s
        end
      end 
    end
  end
  formatted_pigeon_data
end

def insert_gender pigeon_data
  formatted_pigeon_data = insert_color(pigeon_data)
  name_keys = formatted_pigeon_data.keys

  pigeon_data[:gender].each do |gender_key, name_array|
    name_array.each do |name|
      name_keys.each do |item|
        if name == item
          formatted_pigeon_data[name][:gender] << gender_key.to_s
        end
      end 
    end
  end
  formatted_pigeon_data
end

def insert_lives pigeon_data
    formatted_pigeon_data = insert_gender(pigeon_data)
  name_keys = formatted_pigeon_data.keys

  pigeon_data[:lives].each do |lives_key, name_array|
    name_array.each do |name|
      name_keys.each do |item|
        if name == item
          formatted_pigeon_data[name][:lives] << lives_key.to_s
        end
      end 
    end
  end
  formatted_pigeon_data
end

insert_lives pigeon_data



# pigeon_list = {
#   "Theo" => {
#     :color => ["purple", "grey"],
#     :gender => ["male"],
#     :lives => ["Subway"]
#   },
#   "Peter Jr." => {
#     :color => ["purple", "grey"],
#     :gender => ["male"],
#     :lives => ["Library"]
#   },
#   "Lucky" => {
#     :color => ["purple"],
#     :gender => ["male"],
#     :lives => ["Central Park"]
#   },
#   "Ms. K" => {
#     :color => ["grey", "white"],
#     :gender => ["female"],
#     :lives => ["Central Park"]
#   },
#   "Queenie" => {
#     :color => ["white", "brown"],
#     :gender => ["female"],
#     :lives => ["Subway"]
#   },
#   "Andrew" => {
#     :color => ["white"],
#     :gender => ["male"],
#     :lives => ["City Hall"]
#   },
#   "Alex" => {
#     :color => ["white", "brown"],
#     :gender => ["male"],
#     :lives => ["Central Park"]
#   }
# }