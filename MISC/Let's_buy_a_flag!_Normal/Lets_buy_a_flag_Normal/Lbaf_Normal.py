#???「(ガッシャーン！！！)まっててね、xx-チくん♡　今ふらっぐを持っていくからね！！」
import cv2
import os

f1 = r'./src/f2/mv2_1.mp4'
f2 = r'./src/mv2_2.mp4'
f3 = r'./src/f3/mv3_1.mp4'
f4 = r'./src/mv3_2.mp4'
f5 = r'./src/pct2.png'

def play_video(fpath):
    cap = cv2.VideoCapture(fpath)

    if (cap.isOpened()== False):
        print("ビデオファイルを開くとエラーが発生しました")

    while(cap.isOpened()):
        ret, frame = cap.read()
        if ret == True:

            frame = cv2.resize(frame, dsize=(1280, 720))
            cv2.imshow("Video", frame)
            cv2.moveWindow("Video", 0, 0)

            if cv2.waitKey(25) & 0xFF == ord('q'): 
                break
        
        else:
            break
    cap.release()
    cv2.destroyWindow('Video')
#???「いったいどこにあるんだろう?」
def print_img(fpath):
    img = cv2.imread(fpath)
    #cv2.namedWindow('img', cv2.WINDOW_NORMAL)
    img = cv2.resize(img,(980,720))
    cv2.imshow('img', img)
    cv2.moveWindow("img", 0, 0)
    cv2.waitKey()
    cv2.destroyWindow('img')


if(os.path.isfile(r'./pocket/pocket/100yan.txt')):
    play_video(f1)
    print_img(f5)
    play_video(f2)
    
    print("\nふらっぐを買うことができたね。\n")
    print("ipfctf{xx_1_10v3_y0u_50_much!}\n")
    #???「みつけた！みつけた！これでxx-チくん♡　にありがとうって言ってもらえるかもなぁ！」
else:
    play_video(f3)
    print_img(f5)
    play_video(f4)

    print("\nふらっぐを買うことができなかったね。\n")
    print("xxxx_2024{xxxxxxx_xxx_xxxxxxxxx}\n")
