#!/bin/bash

# Create output directory for MP4s
mkdir -p src/static/cs280-final/mp4s

# Function to convert GIFs in a directory
convert_gifs() {
    local dir=$1
    local output_dir="src/static/cs280-final/mp4s/$(basename $dir)"
    mkdir -p "$output_dir"

    # Convert ground truth GIF
    if [ -f "$dir/ep_0_gt.gif" ]; then
        ffmpeg -i "$dir/ep_0_gt.gif" -vf "fps=30" -c:v libx264 -pix_fmt yuv420p "$output_dir/ep_0_gt.mp4"
    fi

    # Convert predicted GIF (normal speed)
    if [ -f "$dir/ep_0_pred.gif" ]; then
        ffmpeg -i "$dir/ep_0_pred.gif" -vf "fps=30" -c:v libx264 -pix_fmt yuv420p "$output_dir/ep_0_pred.mp4"
    fi
}

# Convert GIFs in each directory
convert_gifs "src/static/cs280-final/fm_diff_pretrained_ext"
convert_gifs "src/static/cs280-final/cascade_fm_diff_pretrained_ext"
convert_gifs "src/static/cs280-final/cascade_fm_diff_wrist"
convert_gifs "src/static/cs280-final/fm_ext"

echo "Conversion completed successfully!" 