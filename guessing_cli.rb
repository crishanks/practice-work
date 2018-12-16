def guessing_cli
    puts "Guess a number between 1 and 6."
    random_number = rand(1..6)
    response = nil
    while response != 'exit'
      response = gets.chomp
      if response == 'exit'
        break
      elsif response.to_i == random_number
        puts "You guessed the correct number!"
        break
      else
        puts "The computer guessed #{random_number}."
        random_number = rand(1..6)
      end
    end
    puts "Goodbye"
  end
  
  guessing_cli