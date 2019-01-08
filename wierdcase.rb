def weirdcase(str)
    words_array = str.split(' ')
    words_array.map do |word|
      word.split('').each_with_index.map do |letter, index|
        index % 2 == 0 ? letter.upcase : letter.downcase
      end.join('')
    end.join(' ')
  end
  
  weirdcase('This is a test') # 'ThIs Is A TeSt'