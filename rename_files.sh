#!/bin/bash

# Function to rename files in a directory
rename_files() {
    local dir=$1
    # fm_ext uses output.gif and pred.gif
    if [ "$dir" == "src/static/cs280-final/fm_ext" ]; then
        if [ -f "$dir/output.gif" ]; then
            mv "$dir/output.gif" "$dir/ep_0_gt.gif"
        fi
        if [ -f "$dir/pred.gif" ]; then
            mv "$dir/pred.gif" "$dir/ep_0_pred.gif"
        fi
    else
        # Other dirs use ground_truth_0.gif and predicted_0.gif
        if [ -f "$dir/ground_truth_0.gif" ]; then
            mv "$dir/ground_truth_0.gif" "$dir/ep_0_gt.gif"
        fi
        if [ -f "$dir/predicted_0.gif" ]; then
            mv "$dir/predicted_0.gif" "$dir/ep_0_pred.gif"
        fi
    fi
}

# Rename files in each directory
rename_files "src/static/cs280-final/fm_ext"
rename_files "src/static/cs280-final/fm_diff_pretrained_ext"
rename_files "src/static/cs280-final/cascade_fm_diff_pretrained_ext"
rename_files "src/static/cs280-final/cascade_fm_diff_wrist"

echo "Files renamed successfully!" 