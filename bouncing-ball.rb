def bouncing_ball(h, bounce, window)
    if h <=0 || bounce <= 0 || bounce >=1 || window >= h
        return -1
    end

    ball_seen = -1
    while(h >= window)
        ball_seen += 2
        h = bounce * h
    end
    ball_seen
end
  
bouncing_ball(30, 0.66, 1.5) # 15