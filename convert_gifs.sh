#!/bin/bash

# Create output directory for MP4s
mkdir -p src/static/cs280-final/mp4s

# Function to convert GIFs in a directory
convert_gifs() {
    local dir=$1
    local output_dir="src/static/cs280-final/mp4s/$(basename $dir)"
    mkdir -p "$output_dir"

    # Convert ground truth GIF
    if [ -f "$dir/ground_truth_0.gif" ]; then
        echo "Converting ground truth GIF in $dir..."
        ffmpeg -i "$dir/ground_truth_0.gif" -vf "fps=30" -c:v libx264 -pix_fmt yuv420p "$output_dir/ep_0_gt.mp4"
    else
        echo "Warning: ground_truth_0.gif not found in $dir"
    fi

    # Convert predicted GIF (normal speed)
    if [ -f "$dir/predicted_0.gif" ]; then
        echo "Converting predicted GIF in $dir..."
        ffmpeg -i "$dir/predicted_0.gif" -vf "fps=30" -c:v libx264 -pix_fmt yuv420p "$output_dir/ep_0_pred.mp4"
    else
        echo "Warning: predicted_0.gif not found in $dir"
    fi
}

# Convert GIFs in each directory
echo "Converting fm_ext..."
convert_gifs "src/static/cs280-final/fm_ext"

echo "Converting fm_diff_pretrained_ext..."
convert_gifs "src/static/cs280-final/fm_diff_pretrained_ext"

echo "Converting cascade_fm_diff_pretrained_ext..."
convert_gifs "src/static/cs280-final/cascade_fm_diff_pretrained_ext"

echo "Converting cascade_fm_diff_wrist..."
convert_gifs "src/static/cs280-final/cascade_fm_diff_wrist"

echo "Converting cascade_fm_diff_pretrained_wrist..."
convert_gifs "src/static/cs280-final/cascade_fm_diff_pretrained_wrist"

echo "Converting fm_diff_wrist..."
convert_gifs "src/static/cs280-final/fm_diff_wrist"

echo "Converting fm_wrist..."
convert_gifs "src/static/cs280-final/fm_wrist"

echo "Conversion completed successfully!" 