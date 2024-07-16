import base64
#????「まったくxx-チのやつ、おれをぱしりにしやがってからに。」
#????「ん？ゴミが落ちてるな。...???のやつか、ずいぶんやったなぁ...まあ仕方ない、なんとか直してフラッグとやらを探すか」

f = open('scrap.txt', 'r')
data = f.read()
exec(base64.b64decode(data).decode())
f.close()
