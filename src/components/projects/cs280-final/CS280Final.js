import React, { useRef, useEffect } from 'react';
import './CS280Final.css';
import { InlineMath } from 'react-katex';

// Import MP4s for all videos
import fmExtGroundTruth from '../../../static/cs280-final/mp4s/fm_ext/ep_0_gt.mp4';
import fmExtPredicted from '../../../static/cs280-final/mp4s/fm_ext/ep_0_pred.mp4';
import fmExtPredictedSlow from '../../../static/cs280-final/mp4s/fm_ext/ep_0_pred.mp4';

import fmDiffGroundTruth from '../../../static/cs280-final/mp4s/fm_diff_pretrained_ext/ep_0_gt.mp4';
import fmDiffPredicted from '../../../static/cs280-final/mp4s/fm_diff_pretrained_ext/ep_0_pred.mp4';
import fmDiffPredictedSlow from '../../../static/cs280-final/mp4s/fm_diff_pretrained_ext/ep_0_pred.mp4';

import cascadeFmDiffGroundTruth from '../../../static/cs280-final/mp4s/cascade_fm_diff_pretrained_ext/ep_0_gt.mp4';
import cascadeFmDiffPredicted from '../../../static/cs280-final/mp4s/cascade_fm_diff_pretrained_ext/ep_0_pred.mp4';
import cascadeFmDiffPredictedSlow from '../../../static/cs280-final/mp4s/cascade_fm_diff_pretrained_ext/ep_0_pred.mp4';

import cascadeFmDiffWristGroundTruth from '../../../static/cs280-final/mp4s/cascade_fm_diff_wrist/ep_0_gt.mp4';
import cascadeFmDiffWristPredicted from '../../../static/cs280-final/mp4s/cascade_fm_diff_wrist/ep_0_pred.mp4';
import cascadeFmDiffWristPredictedSlow from '../../../static/cs280-final/mp4s/cascade_fm_diff_wrist/ep_0_pred.mp4';

const CS280Final = () => {
  // Create refs for the slowed-down videos
  const fmExtRef = useRef(null);
  const fmExtPredRef = useRef(null);
  const fmExtSlowRef = useRef(null);
  const fmDiffSlowRef = useRef(null);
  const cascadeFmDiffSlowRef = useRef(null);
  const cascadeFmDiffWristSlowRef = useRef(null);

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
    setSlowPlayback(cascadeFmDiffWristSlowRef, 0.1); // much slower for last one
  }, []);

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

        <h2 className="lvl2-header">Regular UNet Flow Matching (Exterior Camera)</h2>
        <div className="gif-grid">
          <div>
            <h3>Ground Truth</h3>
            <video 
              ref={fmExtRef}
              src={fmExtGroundTruth} 
              autoPlay 
              loop={false}
              muted 
              playsInline
              style={{ maxWidth: '200px', width: '100%' }}
            />
          </div>
          <div>
            <h3>Predicted</h3>
            <video 
              ref={fmExtPredRef}
              src={fmExtPredicted} 
              autoPlay 
              loop={false}
              muted 
              playsInline
              style={{ maxWidth: '200px', width: '100%' }}
            />
          </div>
          <div>
            <h3>Predicted (Slowed)</h3>
            <video 
              ref={fmExtSlowRef}
              src={fmExtPredictedSlow} 
              autoPlay 
              loop={false}
              muted 
              playsInline
              style={{ maxWidth: '200px', width: '100%' }}
            />
          </div>
        </div>
        <p>
          In this exterior camera angle, we observe that the model fails to capture any meaningful action. Instead, it simply predicts the previous ground-truth frame, resulting in a static image.<br /><br />
          Over time, due to the gradual accumulation of errors, the model's predictions diverge from the ground-truth and eventually degrade into noise.
        </p>

        <h2 className="lvl2-header">Regular UNet Flow Matching Diff Parameterization (Exterior Camera)</h2>
        <div className="gif-grid">
          <div>
            <h3>Ground Truth</h3>
            <video 
              src={fmDiffGroundTruth} 
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
              src={fmDiffPredicted} 
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
              ref={fmDiffSlowRef}
              src={fmDiffPredictedSlow} 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ maxWidth: '200px', width: '100%' }}
            />
          </div>
        </div>
        <p>
          With flow matching (FM) diff prediction, we anticipated some improvement in action learning. However, this is not observed—at least when training and evaluating on exterior camera views. This is likely because the background remains largely static, and the robotic arm, which is the only moving object, occupies a small portion of the frame. As a result, the model struggles to learn the arm's motion from the action embeddings.
        </p>
        <h2 className="lvl2-header">Cascaded UNet + Flow Matching Diff Prediction + Pre-Trained ImageNet (Exterior Camera)</h2>
        <div className="gif-grid">
          <div>
            <h3>Ground Truth</h3>
            <video 
              src={cascadeFmDiffGroundTruth} 
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
              src={cascadeFmDiffPredicted} 
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
              ref={cascadeFmDiffSlowRef}
              src={cascadeFmDiffPredictedSlow} 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ maxWidth: '200px', width: '100%' }}
            />
          </div>
        </div>
        <p>
          The same challenge persists here: the model still does not effectively learn actions. However, with the cascaded UNet, the predictions remain stable for a few more frames before devolving into noise. This suggests that, while the cascaded UNet does not improve action learning from the exterior camera angle, it does enhance the stability of the predictions.<br /><br />
          This observation motivated us to train and evaluate on wrist camera angles, where there is more motion and it is easier to assess the model's performance.
        </p>
        <h2 className="lvl2-header">Cascaded UNet + Flow Matching Diff Prediction (Wrist Camera)</h2>
        <div className="gif-grid">
          <div>
            <h3>Ground Truth</h3>
            <video 
              src={cascadeFmDiffWristGroundTruth} 
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
              src={cascadeFmDiffWristPredicted} 
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
              ref={cascadeFmDiffWristSlowRef}
              src={cascadeFmDiffWristPredictedSlow} 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ maxWidth: '200px', width: '100%' }}
            />
          </div>
        </div>
        <p>
          After switching to the wrist camera angle, we initially expected the task to be more challenging. However, the increased background motion actually encourages the model to learn actions more effectively. Here, the cascaded UNet demonstrates a slight improvement in capturing actions compared to the traditional FM model.<br /><br />
          Notably, the form of noise in the predictions is different: rather than devolving into pure randomness, the outputs retain some of the original colors and structure, indicating improved stability.<br /><br />
          <b>(The slowed-down predicted video is now played at an even slower rate to better observe these effects.)</b>
        </p>
      </div>
    </div>
  );
};

export default CS280Final; 
