import cv2
import os

def play_video(fpath):
    cap = cv2.VideoCapture(fpath)

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

play_video(r'./src/mv5.mp4')
