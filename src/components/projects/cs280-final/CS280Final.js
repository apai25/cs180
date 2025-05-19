import React, { useRef, useEffect } from 'react';
import './CS280Final.css';
import { InlineMath } from 'react-katex';

// Import MP4s for all videos
// Exterior camera models
import fmExtGroundTruth from '../../../static/cs280-final/mp4s/fm_ext/ep_0_gt.mp4';
import fmExtPredicted from '../../../static/cs280-final/mp4s/fm_ext/ep_0_pred.mp4';
import fmExtPredictedSlow from '../../../static/cs280-final/mp4s/fm_ext/ep_0_pred.mp4';

import fmDiffGroundTruth from '../../../static/cs280-final/mp4s/fm_diff_pretrained_ext/ep_0_gt.mp4';
import fmDiffPredicted from '../../../static/cs280-final/mp4s/fm_diff_pretrained_ext/ep_0_pred.mp4';
import fmDiffPredictedSlow from '../../../static/cs280-final/mp4s/fm_diff_pretrained_ext/ep_0_pred.mp4';

import cascadeFmDiffGroundTruth from '../../../static/cs280-final/mp4s/cascade_fm_diff_pretrained_ext/ep_0_gt.mp4';
import cascadeFmDiffPredicted from '../../../static/cs280-final/mp4s/cascade_fm_diff_pretrained_ext/ep_0_pred.mp4';
import cascadeFmDiffPredictedSlow from '../../../static/cs280-final/mp4s/cascade_fm_diff_pretrained_ext/ep_0_pred.mp4';

// Wrist camera models
import fmWristGroundTruth from '../../../static/cs280-final/mp4s/fm_wrist/ep_0_gt.mp4';
import fmWristPredicted from '../../../static/cs280-final/mp4s/fm_wrist/ep_0_pred.mp4';
import fmWristPredictedSlow from '../../../static/cs280-final/mp4s/fm_wrist/ep_0_pred.mp4';

import fmDiffWristGroundTruth from '../../../static/cs280-final/mp4s/fm_diff_wrist/ep_0_gt.mp4';
import fmDiffWristPredicted from '../../../static/cs280-final/mp4s/fm_diff_wrist/ep_0_pred.mp4';
import fmDiffWristPredictedSlow from '../../../static/cs280-final/mp4s/fm_diff_wrist/ep_0_pred.mp4';

import cascadeFmDiffWristGroundTruth from '../../../static/cs280-final/mp4s/cascade_fm_diff_wrist/ep_0_gt.mp4';
import cascadeFmDiffWristPredicted from '../../../static/cs280-final/mp4s/cascade_fm_diff_wrist/ep_0_pred.mp4';
import cascadeFmDiffWristPredictedSlow from '../../../static/cs280-final/mp4s/cascade_fm_diff_wrist/ep_0_pred.mp4';

import cascadeFmDiffPretrainedWristGroundTruth from '../../../static/cs280-final/mp4s/cascade_fm_diff_pretrained_wrist/ep_0_gt.mp4';
import cascadeFmDiffPretrainedWristPredicted from '../../../static/cs280-final/mp4s/cascade_fm_diff_pretrained_wrist/ep_0_pred.mp4';
import cascadeFmDiffPretrainedWristPredictedSlow from '../../../static/cs280-final/mp4s/cascade_fm_diff_pretrained_wrist/ep_0_pred.mp4';

const CS280Final = () => {
  // Create refs for the slowed-down videos
  const fmExtRef = useRef(null);
  const fmExtPredRef = useRef(null);
  const fmExtSlowRef = useRef(null);
  const fmDiffSlowRef = useRef(null);
  const cascadeFmDiffSlowRef = useRef(null);
  const fmWristSlowRef = useRef(null);
  const fmDiffWristSlowRef = useRef(null);
  const cascadeFmDiffWristSlowRef = useRef(null);
  const cascadeFmDiffPretrainedWristSlowRef = useRef(null);

  // For fm_ext, stop or loop before last 120 frames (about 4s from end at 30fps)
  useEffect(() => {
    const handleTimeUpdate = (videoRef) => {
      if (!videoRef.current) return;
      const video = videoRef.current;
      // Wait for metadata to load
      video.onloadedmetadata = () => {
        const duration = video.duration;
        const endTime = duration - (120 / 30); // skip last 120 frames
        video.ontimeupdate = () => {
          if (video.currentTime >= endTime) {
            video.currentTime = 0;
            video.play();
          }
        };
      };
    };
    handleTimeUpdate(fmExtRef);
    handleTimeUpdate(fmExtPredRef);
    handleTimeUpdate(fmExtSlowRef);
  }, []);

  // Set playback rate for slowed videos when they load
  useEffect(() => {
    const setSlowPlayback = (videoRef, rate = 0.5) => {
      if (videoRef.current) {
        videoRef.current.playbackRate = rate;
      }
    };
    setSlowPlayback(fmExtSlowRef);
    setSlowPlayback(fmDiffSlowRef);
    setSlowPlayback(cascadeFmDiffSlowRef);
    setSlowPlayback(fmWristSlowRef);
    setSlowPlayback(fmDiffWristSlowRef);
    setSlowPlayback(cascadeFmDiffWristSlowRef);
    setSlowPlayback(cascadeFmDiffPretrainedWristSlowRef, 0.1); // much slower for last one
  }, []);

  // Helper function to render a video grid
  const renderVideoGrid = (groundTruth, predicted, predictedSlow, slowRef, title, description) => (
    <>
      <h2 className="lvl2-header">{title}</h2>
      <div className="gif-grid">
        <div>
          <h3>Ground Truth</h3>
          <video 
            src={groundTruth} 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ maxWidth: '200px', width: '100%' }}
          />
        </div>
        <div>
          <h3>Predicted</h3>
          <video 
            src={predicted} 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ maxWidth: '200px', width: '100%' }}
          />
        </div>
        <div>
          <h3>Predicted (Slowed)</h3>
          <video 
            ref={slowRef}
            src={predictedSlow} 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ maxWidth: '200px', width: '100%' }}
          />
        </div>
      </div>
      <p className="text">{description}</p>
    </>
  );

  return (
    <div className="main">
      <h1 className="main-header">CS 280 Final Project: Action-Conditioned Visual Prediction for Robotic Manipulation</h1>
      <h2 className="lvl4-header" style={{textAlign: 'center'}}>Anirudh Pai, Junhua Ma, Ryan Cheng</h2>
      <div className="content">
        <h2 className="lvl2-header">Overview</h2>
        <p className="text">This page contains supplemental material (primarily visuals) for our project submission.
          It does not contain any visuals that are already in the original paper, but rather contains additional visuals that we think are interesting (especially the GIFs).
          Please see the paper for the rest of the static visuals + more comprehensive discussion.
        </p>

        <h2 className="lvl2-header">Exterior Camera Models</h2>
        {renderVideoGrid(
          fmExtGroundTruth,
          fmExtPredicted,
          fmExtPredictedSlow,
          fmExtSlowRef,
          "Regular UNet Flow Matching (Exterior Camera)",
          "In this exterior camera angle, we observe that the model fails to capture any meaningful action. Instead, it simply predicts the previous ground-truth frame, resulting in a static image.<br /><br />Over time, due to the gradual accumulation of errors, the model's predictions diverge from the ground-truth and eventually degrade into noise."
        )}

        {renderVideoGrid(
          fmDiffGroundTruth,
          fmDiffPredicted,
          fmDiffPredictedSlow,
          fmDiffSlowRef,
          "Regular UNet Flow Matching Diff Parameterization (Exterior Camera)",
          "With flow matching (FM) diff prediction, we anticipated some improvement in action learning. However, this is not observed—at least when training and evaluating on exterior camera views. This is likely because the background remains largely static, and the robotic arm, which is the only moving object, occupies a small portion of the frame. As a result, the model struggles to learn the arm's motion from the action embeddings."
        )}

        {renderVideoGrid(
          cascadeFmDiffGroundTruth,
          cascadeFmDiffPredicted,
          cascadeFmDiffPredictedSlow,
          cascadeFmDiffSlowRef,
          "Cascaded UNet + Flow Matching Diff Prediction + Pre-Trained ImageNet (Exterior Camera)",
          "The same challenge persists here: the model still does not effectively learn actions. However, with the cascaded UNet, the predictions remain stable for a few more frames before devolving into noise. This suggests that, while the cascaded UNet does not improve action learning from the exterior camera angle, it does enhance the stability of the predictions.<br /><br />This observation motivated us to train and evaluate on wrist camera angles, where there is more motion and it is easier to assess the model's performance."
        )}

        <h2 className="lvl2-header">Wrist Camera Models</h2>
        {renderVideoGrid(
          fmWristGroundTruth,
          fmWristPredicted,
          fmWristPredictedSlow,
          fmWristSlowRef,
          "Regular UNet Flow Matching (Wrist Camera)",
          "After switching to the wrist camera angle, we initially expected the task to be more challenging. However, the increased background motion actually encourages the model to learn actions more effectively. With regular FM, though, we still see difficulty in learning actions, as the gif seems to just devolve into noise, without any motion (even initially)."
        )}

        {renderVideoGrid(
          fmDiffWristGroundTruth,
          fmDiffWristPredicted,
          fmDiffWristPredictedSlow,
          fmDiffWristSlowRef,
          "Regular UNet Flow Matching Diff Parameterization (Wrist Camera)",
          "With the wrist camera angle, the diff parameterization shows improved performance in capturing the motion of the robotic arm and the surrounding environment."
        )}

        {renderVideoGrid(
          cascadeFmDiffWristGroundTruth,
          cascadeFmDiffWristPredicted,
          cascadeFmDiffWristPredictedSlow,
          cascadeFmDiffWristSlowRef,
          "Cascaded UNet + Flow Matching Diff Prediction (Wrist Camera)",
          "For this episode, cascading UNets did not lead to much improvement, and actually seems to decrease stability. In general, however, it led to increased improvements in rollouts."
        )}

        {renderVideoGrid(
          cascadeFmDiffPretrainedWristGroundTruth,
          cascadeFmDiffPretrainedWristPredicted,
          cascadeFmDiffPretrainedWristPredictedSlow,
          cascadeFmDiffPretrainedWristSlowRef,
          "Cascaded UNet + Flow Matching Diff Prediction + Pre-Trained ImageNet (Wrist Camera)",
          "The pre-trained ImageNet model combined with the cascaded UNet architecture shows the best performance in the wrist camera setting. The model is able to better capture the complex motion patterns and maintain stability over longer sequences. The slowed-down predicted video is played at an even slower rate to better observe these effects."
        )}
      </div>
    </div>
  );
};

export default CS280Final; 
