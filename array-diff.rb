def array_diff(a,b)
    a - b
end

array_diff([1,2,2], [1])# [2,2]

#equivalent to:

# def array_diff(a,b)
#     b.each do |num|
#       a.each do |checkNum|
#         if num == checkNum
#           a.delete(num)
#         end
#       end
#     end
#     a
#   end

#everything in b should be deleted from a