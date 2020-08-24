import cv2

prototxt = 'face_detection_model/deploy.prototxt.txt'
face_model = 'face_detection_model/res10_300x300_ssd_iter_140000.caffemodel'
emotion_model = 'emotion_detection_model/facial_expression_model_weights.h5'

COLOR_BLUE = (255, 0, 0)
COLOR_GREEN = (0, 255, 0)
COLOR_RED = (0, 0, 255)
FONT = cv2.FONT_HERSHEY_SIMPLEX
THICKNESS = 2

def get_face_model():
    params = {
        'prototxt': prototxt,
        'model': face_model
    }
    return params