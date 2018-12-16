cart = [
    {"AVOCADO" => {:price => 3.0, :clearance => true }},
    {"AVOCADO" => {:price => 3.0, :clearance => true }},
    {"KALE"    => {:price => 3.0, :clearance => false}}
  ]

def consolidate_cart cart
    consolidated_cart = {}
    cart.each do |item_hash|
      item_hash.each do |product_key, product_hash|
        if consolidated_cart[product_key] == nil
          consolidated_cart[product_key] = product_hash
          consolidated_cart[product_key][:count] = 1
        else
          consolidated_cart[product_key][:count] += 1
        end
      end
    end
    consolidated_cart
end
  
  consolidate_cart cart

#   def apply_coupons cart_before_coupons, coupons
#     cart_after_coupons = {}
#     cart_before_coupons.each do |item, attributes_hash|
#       coupons.each do |coupon|
#         if coupon[:item] == item
#           cart_after_coupons[item] = attributes_hash
#           cart_after_coupons[item][:count] -= coupon[:num]
#           cart_after_coupons[`#{item} W/ COUPON`] = attributes_hash
#           cart_after_coupons[`#{item} W/ COUPON`][:count] = attributes_hash[:count] - coupon[:num]
#         else
#           cart_after_coupons[item] = attributes_hash
#         end
#       end
#     end
#     cart_after_coupons
#   end
  
#   apply_coupons ({"AVOCADO"=>{:price=>3.0, :clearance=>true, :count=>2}, "KALE"=>{:price=>3.0, :clearance=>false, :count=>1}}, {:item => "AVOCADO", :num => 2, :cost => 5.0})

def apply_clearance cart
    cart.each do |item, attributes|
        if attributes[:clearance]
            attributes[:price] = (attributes[:price] * 0.8).round(2)
        end
    end
    cart
end

apply_clearance

def checkout cart, coupons
    total_cost = 0
    consolidated_cart = consolidate_cart(cart)
    consolidated_cart_after_coupons = apply_coupons(consolidated_cart, coupons)
    apply_clearance(consolidated_cart_after_coupons)
    consolidated_cart_after_coupons.each do |item, attributes|
        total_cost += attributes[:price]
    end
    
    if total_cost > 100
        total_cost *= 0.9
    end
    total_cost
end

checkout