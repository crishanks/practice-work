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