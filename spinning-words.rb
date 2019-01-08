def spinWords(string)
    result = []
    words_array = string.split(' ')
    words_array.each do |word|
      if word.length >= 5
        result << word.reverse
      else 
        result << word
      end
    end
    result.join(' ')
  end
  
  spinWords("Hey fellow warriors") #"Hey wollef sroirraw"