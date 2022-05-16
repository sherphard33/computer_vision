import tensorflow as tf

class myCallback(tf.keras.callbacks.Callback):
    def on_epoch_end(this, epoch, logs={}, DESIRED_ACCURACY=0.999):
        if(logs.get('accuracy') > DESIRED_ACCURACY):
            print('\nReached {}% accuracy so cancelling the training'.format(DESIRED_ACCURACY))
            this.model.stop_training = True