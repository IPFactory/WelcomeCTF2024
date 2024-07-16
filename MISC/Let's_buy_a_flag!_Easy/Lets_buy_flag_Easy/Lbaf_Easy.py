import cv2
import os
import threading

f1 = r'./src/f1/mv1_1.mp4'
f2 = r'./src/mv1_2.mp4'
f3 = r'./src/pct1.png'

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

def print_img(fpath):
    img = cv2.imread(fpath)
    img = cv2.resize(img,(980,720))
    cv2.imshow('img', img)
    cv2.moveWindow("img", 0, 0)
    cv2.waitKey()
    cv2.destroyWindow('img')


play_video(f1)
print_img(f3)
play_video(f2)
    
print("\nふらっぐを買うことができたね。\n")
print("ipfctf{B4N4N45_4R3_D311C10U5}\n")
