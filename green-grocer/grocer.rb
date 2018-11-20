require "pry"

# [
#   {"AVOCADO" => {:price => 3.0, :clearance => true }},
#   {"AVOCADO" => {:price => 3.0, :clearance => true }},
#   {"KALE"    => {:price => 3.0, :clearance => false}}
# ]

def consolidate_cart(cart)
  result = {}
  cart.each do |item|
    item.each do |key, object_value|
      if result[key] == nil
        result[key] = object_value
        result[key][:count] = 1
      else
        result[key][:count] += 1
      end
    end
  end
  result
end

def apply_coupons(cart, coupons)
  new_cart = {}
  cart.each do |item_key, attributes|
    if new_cart[item_key] == nil
      new_cart[item_key] = cart[item_key]
    end
    coupons.each do |coupon|
      if attributes[:count] == nil
        attributes[:count] = 1
      else
        attributes[:count] += 1
      end
      if item_key == coupon[:item]
        attributes[:count] -= coupon[:num]
        new_cart["#{item_key} W/COUPON"] = {:price => coupon[:cost], :clearance => attributes[:clearance], :count => attributes[:count]}
        new_cart[item_key][:count] -= new_cart["#{item_key} W/COUPON"][:count]
      end
    end
  end
  new_cart
  # binding.pry
end

def apply_clearance(cart)
  cart.each do |item, attributes|
    if attributes[:clearance]
      attributes[:price] = (attributes[:price] * 0.8).round(2)
    end
  end
  cart
end

def checkout(cart, coupons)
  # code here
end
