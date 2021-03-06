require "pry"



def game_hash
    game_hash = {
        :home => {
            :team_name => 'Brooklyn Nets',
            :colors => ['Black', 'White'],
            :players => [
                {
                    :player_name => 'Alan Anderson',
                    :number => 0,
                    :shoe => 16,
                    :points => 22,
                    :rebounds => 12,
                    :assists => 12,
                    :steals => 3,
                    :blocks => 1,
                    :slam_dunks => 1
                }, {
                    :player_name => 'Reggie Evans',
                    :number => 30,
                    :shoe => 14,
                    :points => 12,
                    :rebounds => 12,
                    :assists => 12,
                    :steals => 12,
                    :blocks => 12,
                    :slam_dunks => 7
                }, {
                    :player_name => 'Brook Lopez',
                    :number => 11,
                    :shoe => 17,
                    :points => 17,
                    :rebounds => 19,
                    :assists => 10,
                    :steals => 3,
                    :blocks => 1,
                    :slam_dunks => 15
                }, {
                    :player_name => 'Mason Plumlee',
                    :number => 1,
                    :shoe => 19,
                    :points => 26,
                    :rebounds => 12,
                    :assists => 6,
                    :steals => 3,
                    :blocks => 8,
                    :slam_dunks => 5
                }, {
                    :player_name => 'Jason Terry',
                    :number => 31,
                    :shoe => 15,
                    :points => 19,
                    :rebounds => 2,
                    :assists => 2,
                    :steals => 4,
                    :blocks => 11,
                    :slam_dunks => 1
                }
            ]
        },
        :away => {
            :team_name => 'Charlotte Hornets',
            :colors => ['Turquoise', 'Purple'],
            :players => [
                {
                    :player_name => 'Jeff Adrien',
                    :number => 4,
                    :shoe => 18,
                    :points => 10,
                    :rebounds => 1,
                    :assists => 1,
                    :steals => 2,
                    :blocks => 7,
                    :slam_dunks => 2
                }, {
                    :player_name => 'Bismak Biyombo',
                    :number => 0,
                    :shoe => 16,
                    :points => 12,
                    :rebounds => 4,
                    :assists => 7,
                    :steals => 7,
                    :blocks => 15,
                    :slam_dunks => 10
                }, {
                    :player_name => 'DeSagna Diop',
                    :number => 2,
                    :shoe => 14,
                    :points => 24,
                    :rebounds => 12,
                    :assists => 12,
                    :steals => 4,
                    :blocks => 5,
                    :slam_dunks => 5
                }, {
                    :player_name => 'Ben Gordon',
                    :number => 8,
                    :shoe => 15,
                    :points => 33,
                    :rebounds => 3,
                    :assists => 2,
                    :steals => 1,
                    :blocks => 1,
                    :slam_dunks => 0
                }, {
                    :player_name => 'Brendan Haywood',
                    :number => 33,
                    :shoe => 15,
                    :points => 6,
                    :rebounds => 12,
                    :assists => 12,
                    :steals => 22,
                    :blocks => 5,
                    :slam_dunks => 12
                }
            ]
        }
    }
end


def num_points_scored name
  game_hash.each do |location, team_info|
    team_info[:players].each do |player|
        if name == player[:player_name]
          return player[:points]
        end
      end
  end
end

num_points_scored "Brendan Haywood" #6

def shoe_size name
    game_hash.each do |location, team_info|
      team_info[:players].each do |player|
          if name == player[:player_name]
            return player[:shoe]
          end
        end
    end
  end
  
  shoe_size "Ben Gordon" #15

def team_colors team
  game_hash.each do |location, team_info|
    if team_info[:team_name] == team
      return team_info[:colors]
    end
  end
end

team_colors 'Charlotte Hornets' #['Turquoise', 'Purple']

def team_names
  teams = []
  game_hash.each do |location, team_info|
    teams << team_info[:team_name]
  end
  teams
end

team_names #["Brooklyn Nets", "Charlotte Hornets"]

def player_numbers team_name
  jersey_numbers = []
  game_hash.each do |location, team_info|
    if team_name == team_info[:team_name]
      team_info[:players].each do |player_hash|
        jersey_numbers << player_hash[:number]
      end
    end
  end
  jersey_numbers
end

player_numbers 'Charlotte Hornets' #[4, 0, 2, 8, 33]

def player_stats name
  player_stats_minus_name = {}
  game_hash.each do |location, team_info|
    team_info[:players].each do |player_hash|
      if player_hash[:player_name] == name
        player_hash.each do |key, value|
          if key != :player_name
            player_stats_minus_name[key] = value
          end
        end
      end
    end
  end
  player_stats_minus_name
end

player_stats 'DeSagna Diop' #{:number=>2, :shoe=>14, :points=>24, :rebounds=>12, :assists=>12, :steals=>4, :blocks=>5, :slam_dunks=>5}

def find_biggest_shoe
  biggest_shoe = 0
  game_hash.each do |location, team_info|
    team_info[:players].each do |player_hash|
      if player_hash[:shoe] > biggest_shoe
        biggest_shoe = player_hash[:shoe]
      end
    end
  end
  biggest_shoe
end

find_biggest_shoe #19

def big_shoe_rebounds
  the_biggest_shoe = find_biggest_shoe
  game_hash.each do |location, team_info|
    team_info[:players].each do |player_hash|
      if player_hash[:shoe] == the_biggest_shoe
        return player_hash[:rebounds]
      end
    end
  end
end

big_shoe_rebounds #12

def most_points_scored
  player_with_most_points = nil
  most_points = 0
  game_hash.each do |location, team_info|
    team_info[:players].each do |player_hash|
      if player_hash[:points] > most_points
        most_points = player_hash[:points]
        player_with_most_points = player_hash[:player_name]
      end
    end
  end
  player_with_most_points
end

most_points_scored #'Ben Gordon'

def winning_team
  home_score = 0
  away_score = 0
  game_hash[:home][:players].each do |player_hash|
    home_score += player_hash[:points]
  end

  game_hash[:away][:players].each do |player_hash|
    away_score += player_hash[:points]
  end

  if home_score > away_score
    return game_hash[:home][:team_name]
  end
  game_hash[:away][:team_name]
end

winning_team #'Brooklyn Nets'

def player_with_longest_name
  longest_name = ''
  game_hash.each do |location, team_info|
    team_info[:players].each do |player_hash|
      if player_hash[:player_name].length > longest_name.length
        longest_name = player_hash[:player_name]
      end
    end
  end
  longest_name
end

player_with_longest_name #'Brendan Haywood'

def most_steals_total
  most_steals = 0
  game_hash.each do |location, team_data|
    team_data[:players].each do |player_hash|
      if player_hash[:steals] > most_steals
        most_steals = player_hash[:steals]
      end
    end
  end
  most_steals
end

most_steals_total #22

def long_name_steals_a_ton? 
  the_longest_name = player_with_longest_name
  the_most_steals = most_steals_total
  game_hash.each do |location, team_data|
    team_data[:players].each do |player_hash|
      if player_hash[:player_name] == the_longest_name && player_hash[:steals] == the_most_steals
        return true
      end
    end
  end
  false
end

long_name_steals_a_ton? #true



