import React from 'react';

import './Proj02.css';

import cameraman from '../../../static/proj02/1-1/cameraman.png';
import binarized from '../../../static/proj02/1-1/binarized.png';
import magnitude_gradient from '../../../static/proj02/1-1/magnitude_gradient.png';
import partial_dx from '../../../static/proj02/1-1/partial_dx.png';
import partial_dy from '../../../static/proj02/1-1/partial_dy.png';

import blur_fin_diff_partial_dx from '../../../static/proj02/1-2/blur_fin_diff_partial_dx.png';
import blur_fin_diff_partial_dy from '../../../static/proj02/1-2/blur_fin_diff_partial_dy.png';
import blur_fin_diff_magnitude_gradient from '../../../static/proj02/1-2/blur_fin_diff_magnitude_gradient.png';
import blur_fin_diff_binarized from '../../../static/proj02/1-2/blur_fin_diff_binarized.png';

import dog_dx from '../../../static/proj02/1-2/dog_dx.png';
import dog_dy from '../../../static/proj02/1-2/dog_dy.png';
import dog_partial_dx from '../../../static/proj02/1-2/dog_partial_dx.png';
import dog_partial_dy from '../../../static/proj02/1-2/dog_partial_dy.png';
import dog_magnitude_gradient from '../../../static/proj02/1-2/dog_magnitude_gradient.png';
import dog_binarized from '../../../static/proj02/1-2/dog_binarized.png';

import taj from '../../../static/proj02/2-1/taj.jpg';
import moon from '../../../static/proj02/2-1/moon.png';
import sharpened_taj from '../../../static/proj02/2-1/sharpened_taj.jpg';
import sharpened_moon from '../../../static/proj02/2-1/sharpened_moon.png';
import cat from '../../../static/proj02/2-1/cat.jpg';
import bcat from '../../../static/proj02/2-1/bcat.jpg';
import sharpened_bcat from '../../../static/proj02/2-1/sharpened_bcat.jpg';

import nutmeg from '../../../static/proj02/2-2/nutmeg.jpg';
import derek from '../../../static/proj02/2-2/derek.jpg';
import hybrid_nutmeg_derek from '../../../static/proj02/2-2/hybrid_nutmeg_derek.jpg';
import dog from '../../../static/proj02/2-2/dog.jpg';
import hcat from '../../../static/proj02/2-2/cat.jpg';
import hybrid_dog_cat from '../../../static/proj02/2-2/hybrid_dog_cat.jpg';
import lion from '../../../static/proj02/2-2/lion.jpg';
import tiger from '../../../static/proj02/2-2/tiger.jpg';
import hybrid_lion_tiger from '../../../static/proj02/2-2/hybrid_lion_tiger.jpg';
import oldtoronto from '../../../static/proj02/2-2/oldtoronto.png';
import newtoronto from '../../../static/proj02/2-2/newtoronto.png';
import hybrid_newtoronto_oldtoronto from '../../../static/proj02/2-2/hybrid_newtoronto_oldtoronto.png';
import fft_cat from '../../../static/proj02/2-2/fft_cat.jpg';
import fft_low_frequency_cat from '../../../static/proj02/2-2/fft_low_frequency_cat.jpg';
import fft_dog from '../../../static/proj02/2-2/fft_dog.jpg';
import fft_high_frequency_dog from '../../../static/proj02/2-2/fft_high_frequency_dog.jpg';
import fft_hybrid_dog_cat from '../../../static/proj02/2-2/fft_hybrid_dog_cat.jpg';
import hybrid_gray_nutmeg_derek from '../../../static/proj02/2-2/hybrid_gray_nutmeg_derek.jpg';
import hybrid_gray_nutmeg_gray_derek from '../../../static/proj02/2-2/hybrid_gray_nutmeg_gray_derek.jpg';
import hybrid_nutmeg_gray_derek from '../../../static/proj02/2-2/hybrid_nutmeg_gray_derek.jpg';

import apple_gaussian_0 from '../../../static/proj02/2-3/apple_gaussian_0.jpg';
import apple_gaussian_1 from '../../../static/proj02/2-3/apple_gaussian_1.jpg';
import apple_gaussian_2 from '../../../static/proj02/2-3/apple_gaussian_2.jpg';
import apple_gaussian_3 from '../../../static/proj02/2-3/apple_gaussian_3.jpg';
import apple_gaussian_4 from '../../../static/proj02/2-3/apple_gaussian_4.jpg';
import apple_gaussian_5 from '../../../static/proj02/2-3/apple_gaussian_5.jpg';

import apple_laplacian_0 from '../../../static/proj02/2-3/apple_laplacian_0.jpg';
import apple_laplacian_1 from '../../../static/proj02/2-3/apple_laplacian_1.jpg';
import apple_laplacian_2 from '../../../static/proj02/2-3/apple_laplacian_2.jpg';
import apple_laplacian_3 from '../../../static/proj02/2-3/apple_laplacian_3.jpg';
import apple_laplacian_4 from '../../../static/proj02/2-3/apple_laplacian_4.jpg';
import apple_laplacian_5 from '../../../static/proj02/2-3/apple_laplacian_5.jpg';

import orange_gaussian_0 from '../../../static/proj02/2-3/orange_gaussian_0.jpg';
import orange_gaussian_1 from '../../../static/proj02/2-3/orange_gaussian_1.jpg';
import orange_gaussian_2 from '../../../static/proj02/2-3/orange_gaussian_2.jpg';
import orange_gaussian_3 from '../../../static/proj02/2-3/orange_gaussian_3.jpg';
import orange_gaussian_4 from '../../../static/proj02/2-3/orange_gaussian_4.jpg';
import orange_gaussian_5 from '../../../static/proj02/2-3/orange_gaussian_5.jpg';

import orange_laplacian_0 from '../../../static/proj02/2-3/orange_laplacian_0.jpg';
import orange_laplacian_1 from '../../../static/proj02/2-3/orange_laplacian_1.jpg';
import orange_laplacian_2 from '../../../static/proj02/2-3/orange_laplacian_2.jpg';
import orange_laplacian_3 from '../../../static/proj02/2-3/orange_laplacian_3.jpg';
import orange_laplacian_4 from '../../../static/proj02/2-3/orange_laplacian_4.jpg';
import orange_laplacian_5 from '../../../static/proj02/2-3/orange_laplacian_5.jpg';

import blended_apple_laplacian_0 from '../../../static/proj02/2-3/blended_apple_laplacian_0.jpg';
import blended_apple_laplacian_1 from '../../../static/proj02/2-3/blended_apple_laplacian_1.jpg';
import blended_apple_laplacian_2 from '../../../static/proj02/2-3/blended_apple_laplacian_2.jpg';
import blended_apple_laplacian_3 from '../../../static/proj02/2-3/blended_apple_laplacian_3.jpg';
import blended_apple_laplacian_4 from '../../../static/proj02/2-3/blended_apple_laplacian_4.jpg';
import blended_apple_laplacian_5 from '../../../static/proj02/2-3/blended_apple_laplacian_5.jpg';
import blended_apple from '../../../static/proj02/2-3/blended_apple.jpg';

import blended_orange_laplacian_0 from '../../../static/proj02/2-3/blended_orange_laplacian_0.jpg';
import blended_orange_laplacian_1 from '../../../static/proj02/2-3/blended_orange_laplacian_1.jpg';
import blended_orange_laplacian_2 from '../../../static/proj02/2-3/blended_orange_laplacian_2.jpg';
import blended_orange_laplacian_3 from '../../../static/proj02/2-3/blended_orange_laplacian_3.jpg';
import blended_orange_laplacian_4 from '../../../static/proj02/2-3/blended_orange_laplacian_4.jpg';
import blended_orange_laplacian_5 from '../../../static/proj02/2-3/blended_orange_laplacian_5.jpg';
import blended_orange from '../../../static/proj02/2-3/blended_orange.jpg';

import hybrid_0 from '../../../static/proj02/2-3/hybrid_0.jpg';
import hybrid_1 from '../../../static/proj02/2-3/hybrid_1.jpg';
import hybrid_2 from '../../../static/proj02/2-3/hybrid_2.jpg';
import hybrid_3 from '../../../static/proj02/2-3/hybrid_3.jpg';
import hybrid_4 from '../../../static/proj02/2-3/hybrid_4.jpg';
import hybrid_5 from '../../../static/proj02/2-3/hybrid_5.jpg';
import hybrid from '../../../static/proj02/2-3/hybrid.jpg';

import basketball from '../../../static/proj02/2-4/basketball_volleyball/basketball.png';
import volleyball from '../../../static/proj02/2-4/basketball_volleyball/volleyball.png';
import basketball_volleyball_hybrid from '../../../static/proj02/2-4/basketball_volleyball/basketball_volleyball_hybrid.jpg';
import basketball_mask from '../../../static/proj02/2-4/basketball_volleyball/basketball_mask.jpg';

import chocolatebar from '../../../static/proj02/2-4/chocolatebar_building/chocolatebar.png';
import building from '../../../static/proj02/2-4/chocolatebar_building/building.png';
import chocolatebar_building_hybrid from '../../../static/proj02/2-4/chocolatebar_building/chocolatebar_building_hybrid.jpg';
import chocolatebar_mask from '../../../static/proj02/2-4/chocolatebar_building/chocolatebar_mask.jpg';

import corncob from '../../../static/proj02/2-4/corncob_corndog/corncob.png';
import corndog from '../../../static/proj02/2-4/corncob_corndog/corndog.png';
import corncob_corndog_hybrid from '../../../static/proj02/2-4/corncob_corndog/corncob_corndog_hybrid.jpg';
import corncob_mask from '../../../static/proj02/2-4/corncob_corndog/corncob_mask.jpg';

import corncob_gaussian_0 from '../../../static/proj02/2-4/corncob_corndog/corncob_gaussian_0.jpg';
import corncob_gaussian_1 from '../../../static/proj02/2-4/corncob_corndog/corncob_gaussian_1.jpg';
import corncob_gaussian_2 from '../../../static/proj02/2-4/corncob_corndog/corncob_gaussian_2.jpg';
import corncob_gaussian_3 from '../../../static/proj02/2-4/corncob_corndog/corncob_gaussian_3.jpg';
import corncob_gaussian_4 from '../../../static/proj02/2-4/corncob_corndog/corncob_gaussian_4.jpg';
import corncob_gaussian_5 from '../../../static/proj02/2-4/corncob_corndog/corncob_gaussian_5.jpg';

import corndog_gaussian_0 from '../../../static/proj02/2-4/corncob_corndog/corndog_gaussian_0.jpg';
import corndog_gaussian_1 from '../../../static/proj02/2-4/corncob_corndog/corndog_gaussian_1.jpg';
import corndog_gaussian_2 from '../../../static/proj02/2-4/corncob_corndog/corndog_gaussian_2.jpg';
import corndog_gaussian_3 from '../../../static/proj02/2-4/corncob_corndog/corndog_gaussian_3.jpg';
import corndog_gaussian_4 from '../../../static/proj02/2-4/corncob_corndog/corndog_gaussian_4.jpg';
import corndog_gaussian_5 from '../../../static/proj02/2-4/corncob_corndog/corndog_gaussian_5.jpg';

import corncob_laplacian_0 from '../../../static/proj02/2-4/corncob_corndog/corncob_laplacian_0.jpg';
import corncob_laplacian_1 from '../../../static/proj02/2-4/corncob_corndog/corncob_laplacian_1.jpg';
import corncob_laplacian_2 from '../../../static/proj02/2-4/corncob_corndog/corncob_laplacian_2.jpg';
import corncob_laplacian_3 from '../../../static/proj02/2-4/corncob_corndog/corncob_laplacian_3.jpg';
import corncob_laplacian_4 from '../../../static/proj02/2-4/corncob_corndog/corncob_laplacian_4.jpg';
import corncob_laplacian_5 from '../../../static/proj02/2-4/corncob_corndog/corncob_laplacian_5.jpg';

import corndog_laplacian_0 from '../../../static/proj02/2-4/corncob_corndog/corndog_laplacian_0.jpg';
import corndog_laplacian_1 from '../../../static/proj02/2-4/corncob_corndog/corndog_laplacian_1.jpg';
import corndog_laplacian_2 from '../../../static/proj02/2-4/corncob_corndog/corndog_laplacian_2.jpg';
import corndog_laplacian_3 from '../../../static/proj02/2-4/corncob_corndog/corndog_laplacian_3.jpg';
import corndog_laplacian_4 from '../../../static/proj02/2-4/corncob_corndog/corndog_laplacian_4.jpg';
import corndog_laplacian_5 from '../../../static/proj02/2-4/corncob_corndog/corndog_laplacian_5.jpg';

import blended_corncob_laplacian_0 from '../../../static/proj02/2-4/corncob_corndog/blended_corncob_laplacian_0.jpg';
import blended_corncob_laplacian_1 from '../../../static/proj02/2-4/corncob_corndog/blended_corncob_laplacian_1.jpg';
import blended_corncob_laplacian_2 from '../../../static/proj02/2-4/corncob_corndog/blended_corncob_laplacian_2.jpg';
import blended_corncob_laplacian_3 from '../../../static/proj02/2-4/corncob_corndog/blended_corncob_laplacian_3.jpg';
import blended_corncob_laplacian_4 from '../../../static/proj02/2-4/corncob_corndog/blended_corncob_laplacian_4.jpg';
import blended_corncob_laplacian_5 from '../../../static/proj02/2-4/corncob_corndog/blended_corncob_laplacian_5.jpg';
import blended_corncob from '../../../static/proj02/2-4/corncob_corndog/corncob_blended.jpg';

import blended_corndog_laplacian_0 from '../../../static/proj02/2-4/corncob_corndog/blended_corndog_laplacian_0.jpg';
import blended_corndog_laplacian_1 from '../../../static/proj02/2-4/corncob_corndog/blended_corndog_laplacian_1.jpg';
import blended_corndog_laplacian_2 from '../../../static/proj02/2-4/corncob_corndog/blended_corndog_laplacian_2.jpg';
import blended_corndog_laplacian_3 from '../../../static/proj02/2-4/corncob_corndog/blended_corndog_laplacian_3.jpg';
import blended_corndog_laplacian_4 from '../../../static/proj02/2-4/corncob_corndog/blended_corndog_laplacian_4.jpg';
import blended_corndog_laplacian_5 from '../../../static/proj02/2-4/corncob_corndog/blended_corndog_laplacian_5.jpg';
import blended_corndog from '../../../static/proj02/2-4/corncob_corndog/corndog_blended.jpg';

import corncob_corndog_hybrid_0 from '../../../static/proj02/2-4/corncob_corndog/corncob_corndog_hybrid_0.jpg';
import corncob_corndog_hybrid_1 from '../../../static/proj02/2-4/corncob_corndog/corncob_corndog_hybrid_1.jpg';
import corncob_corndog_hybrid_2 from '../../../static/proj02/2-4/corncob_corndog/corncob_corndog_hybrid_2.jpg';
import corncob_corndog_hybrid_3 from '../../../static/proj02/2-4/corncob_corndog/corncob_corndog_hybrid_3.jpg';
import corncob_corndog_hybrid_4 from '../../../static/proj02/2-4/corncob_corndog/corncob_corndog_hybrid_4.jpg';
import corncob_corndog_hybrid_5 from '../../../static/proj02/2-4/corncob_corndog/corncob_corndog_hybrid_5.jpg';


const Proj02 = () => {

    const data_1_1 = [
        {image: cameraman, caption: "Original cameraman"},
        {image: partial_dx, caption: "dx"},
        {image: partial_dy, caption: "dy"},
        {image: magnitude_gradient, caption: "Gradient magnitude"},
        {image: binarized, caption: "Binarized gradient magnitude"}
    ]

    const data_1_2_1 = [
        {image: cameraman, caption: "Original cameraman"},
        {image: blur_fin_diff_partial_dx, caption: "dx"},
        {image: blur_fin_diff_partial_dy, caption: "dy"},
        {image: blur_fin_diff_magnitude_gradient, caption: "Gradient magnitude"},
        {image: blur_fin_diff_binarized, caption: "Binarized gradient magnitude"}
    ]

    const data_1_2_filters = [
        {image: dog_dx, caption: "Derivative of Gaussian (dx)"},
        {image: dog_dy, caption: "Derivative of Gaussian (dy)"}
    ]

    const data_1_2_2 = [
        {image: cameraman, caption: "Original cameraman"},
        {image: dog_partial_dx, caption: "dx"},
        {image: dog_partial_dy, caption: "dy"},
        {image: dog_magnitude_gradient, caption: "Gradient magnitude"},
        {image: dog_binarized, caption: "Binarized gradient magnitude"}
    ]

    const data_1_2_comparison = [
        {image: blur_fin_diff_binarized, caption: "Binarized gradient magnitude (Blurred Finite Difference)"},
        {image: dog_binarized, caption: "Binarized gradient magnitude (DoG)"}
    ]

    const data_2_1_1 = [
        {image: taj, caption: "Original Taj Mahal"},
        {image: sharpened_taj, caption: "Sharpened Taj Mahal"},
        {image: moon, caption: "Original Moon"},
        {image: sharpened_moon, caption: "Sharpened Moon"}
    ]

    const data_2_1_2 = [
        {image: cat, caption: "Original cat"},
        {image: bcat, caption: "Blurred cat (to be re-sharpened)"},
        {image: sharpened_bcat, caption: "Re-sharpened cat"}
    ]

    const data_2_2 = [
        {image: nutmeg, caption: "High frequency"},
        {image: derek, caption: "Low frequency"},
        {image: hybrid_nutmeg_derek, caption: "Hybrid [low_sigma=5, high_sigma=10, alpha=3]"},
        {image: dog, caption: "High frequency"},
        {image: hcat, caption: "Low frequency"},
        {image: hybrid_dog_cat, caption: "Hybrid [low_sigma=5, high_sigma=9, alpha=3.5]"},
        {image: lion, caption: "High frequency"},
        {image: tiger, caption: "Low frequency"},
        {image: hybrid_lion_tiger, caption: "Hybrid [low_sigma=5, high_sigma=10, alpha=5]"},
        {image: oldtoronto, caption: "Old Toronto"},
        {image: newtoronto, caption: "New Toronto"},
        {image: hybrid_newtoronto_oldtoronto, caption: "Hybrid [low_sigma=5, high_sigma=8, alpha=2]"}
    ]

    const data_2_2_ffts = [
        {image: fft_cat, caption: "FFT of cat"},
        {image: fft_low_frequency_cat, caption: "FFT of low frequency cat"},
        {image: fft_dog, caption: "FFT of dog"},
        {image: fft_high_frequency_dog, caption: "FFT of high frequency dog"},
        {image: fft_hybrid_dog_cat, caption: "FFT of hybrid dog-cat"}
    ]
    
    const data_2_2_colors = [
        {image: hybrid_gray_nutmeg_gray_derek, caption: "Hybrid (both grayscale)"},
        {image: hybrid_gray_nutmeg_derek, caption: "Hybrid (grayscale nutmeg, color derek)"},
        {image: hybrid_nutmeg_gray_derek, caption: "Hybrid (color nutmeg, grayscale derek)"},
        {image: hybrid_nutmeg_derek, caption: "Hybrid (both color)"}
    ]

    const data_2_3 = [
        {image: apple_gaussian_0, caption: "Apple Gaussian Stack Lvl. 0"},
        {image: apple_gaussian_1, caption: "Apple Gaussian Stack Lvl. 1"},
        {image: apple_gaussian_2, caption: "Apple Gaussian Stack Lvl. 2"},
        {image: apple_gaussian_3, caption: "Apple Gaussian Stack Lvl. 3"},
        {image: apple_gaussian_4, caption: "Apple Gaussian Stack Lvl. 4"},
        {image: apple_gaussian_5, caption: "Apple Gaussian Stack Lvl. 5"},
        {image: orange_gaussian_0, caption: "Orange Gaussian Stack Lvl. 0"},
        {image: orange_gaussian_1, caption: "Orange Gaussian Stack Lvl. 1"},
        {image: orange_gaussian_2, caption: "Orange Gaussian Stack Lvl. 2"},
        {image: orange_gaussian_3, caption: "Orange Gaussian Stack Lvl. 3"},
        {image: orange_gaussian_4, caption: "Orange Gaussian Stack Lvl. 4"},
        {image: orange_gaussian_5, caption: "Orange Gaussian Stack Lvl. 5"},
        {image: apple_laplacian_0, caption: "Apple Laplacian Stack Lvl. 0"},
        {image: apple_laplacian_1, caption: "Apple Laplacian Stack Lvl. 1"},
        {image: apple_laplacian_2, caption: "Apple Laplacian Stack Lvl. 2"},
        {image: apple_laplacian_3, caption: "Apple Laplacian Stack Lvl. 3"},
        {image: apple_laplacian_4, caption: "Apple Laplacian Stack Lvl. 4"},
        {image: apple_laplacian_5, caption: "Apple Laplacian Stack Lvl. 5"},
        {image: orange_laplacian_0, caption: "Orange Laplacian Stack Lvl. 0"},
        {image: orange_laplacian_1, caption: "Orange Laplacian Stack Lvl. 1"},
        {image: orange_laplacian_2, caption: "Orange Laplacian Stack Lvl. 2"},
        {image: orange_laplacian_3, caption: "Orange Laplacian Stack Lvl. 3"},
        {image: orange_laplacian_4, caption: "Orange Laplacian Stack Lvl. 4"},
        {image: orange_laplacian_5, caption: "Orange Laplacian Stack Lvl. 5"},
        {image: blended_apple_laplacian_0, caption: "Blended Apple Laplacian Stack Lvl. 0"},
        {image: blended_apple_laplacian_1, caption: "Blended Apple Laplacian Stack Lvl. 1"},
        {image: blended_apple_laplacian_2, caption: "Blended Apple Laplacian Stack Lvl. 2"},
        {image: blended_apple_laplacian_3, caption: "Blended Apple Laplacian Stack Lvl. 3"},
        {image: blended_apple_laplacian_4, caption: "Blended Apple Laplacian Stack Lvl. 4"},
        {image: blended_apple_laplacian_5, caption: "Blended Apple Laplacian Stack Lvl. 5"},
        {image: blended_orange_laplacian_0, caption: "Blended Orange Laplacian Stack Lvl. 0"},
        {image: blended_orange_laplacian_1, caption: "Blended Orange Laplacian Stack Lvl. 1"},
        {image: blended_orange_laplacian_2, caption: "Blended Orange Laplacian Stack Lvl. 2"},
        {image: blended_orange_laplacian_3, caption: "Blended Orange Laplacian Stack Lvl. 3"},
        {image: blended_orange_laplacian_4, caption: "Blended Orange Laplacian Stack Lvl. 4"},
        {image: blended_orange_laplacian_5, caption: "Blended Orange Laplacian Stack Lvl. 5"},
        {image: hybrid_0, caption: "Hybrid Lvl. 0"},
        {image: hybrid_1, caption: "Hybrid Lvl. 1"},
        {image: hybrid_2, caption: "Hybrid Lvl. 2"},
        {image: hybrid_3, caption: "Hybrid Lvl. 3"},
        {image: hybrid_4, caption: "Hybrid Lvl. 4"},
        {image: hybrid_5, caption: "Hybrid Lvl. 5"}
    ]

    const data_2_3_res  = [
        {image: blended_apple, caption: "Blended Apple"},
        {image: blended_orange, caption: "Blended Orange"},
        {image: hybrid, caption: "Final Blended (Oraple)"}
    ]

    const basketball_volleyball = [
        {image: basketball, caption: "Basketball"},
        {image: volleyball, caption: "Volleyball"},
        {image: basketball_mask, caption: "Mask"},
        {image: basketball_volleyball_hybrid, caption: "Hybrid"},
    ]

    const chocolatebar_building = [
        {image: chocolatebar, caption: "Chocolate Bar"},
        {image: building, caption: "Building"},
        {image: chocolatebar_mask, caption: "Mask"},
        {image: chocolatebar_building_hybrid, caption: "Hybrid"},
    ]

    const corncob_corndog = [
        {image: corncob, caption: "Corncob"},
        {image: corndog, caption: "Corndog"},
        {image: corncob_mask, caption: "Mask"},
        {image: corncob_corndog_hybrid, caption: "Hybrid"},
    ]

    const corncob_corndog_full = [
        {image: corncob_gaussian_0, caption: "Corncob Gaussian Stack Lvl. 0"},
        {image: corncob_gaussian_1, caption: "Corncob Gaussian Stack Lvl. 1"},
        {image: corncob_gaussian_2, caption: "Corncob Gaussian Stack Lvl. 2"},
        {image: corncob_gaussian_3, caption: "Corncob Gaussian Stack Lvl. 3"},
        {image: corncob_gaussian_4, caption: "Corncob Gaussian Stack Lvl. 4"},
        {image: corncob_gaussian_5, caption: "Corncob Gaussian Stack Lvl. 5"},
        {image: corndog_gaussian_0, caption: "Corndog Gaussian Stack Lvl. 0"},
        {image: corndog_gaussian_1, caption: "Corndog Gaussian Stack Lvl. 1"},
        {image: corndog_gaussian_2, caption: "Corndog Gaussian Stack Lvl. 2"},
        {image: corndog_gaussian_3, caption: "Corndog Gaussian Stack Lvl. 3"},
        {image: corndog_gaussian_4, caption: "Corndog Gaussian Stack Lvl. 4"},
        {image: corndog_gaussian_5, caption: "Corndog Gaussian Stack Lvl. 5"},
        {image: corncob_laplacian_0, caption: "Corncob Laplacian Stack Lvl. 0"},
        {image: corncob_laplacian_1, caption: "Corncob Laplacian Stack Lvl. 1"},
        {image: corncob_laplacian_2, caption: "Corncob Laplacian Stack Lvl. 2"},
        {image: corncob_laplacian_3, caption: "Corncob Laplacian Stack Lvl. 3"},
        {image: corncob_laplacian_4, caption: "Corncob Laplacian Stack Lvl. 4"},
        {image: corncob_laplacian_5, caption: "Corncob Laplacian Stack Lvl. 5"},
        {image: corndog_laplacian_0, caption: "Corndog Laplacian Stack Lvl. 0"},
        {image: corndog_laplacian_1, caption: "Corndog Laplacian Stack Lvl. 1"},
        {image: corndog_laplacian_2, caption: "Corndog Laplacian Stack Lvl. 2"},
        {image: corndog_laplacian_3, caption: "Corndog Laplacian Stack Lvl. 3"},
        {image: corndog_laplacian_4, caption: "Corndog Laplacian Stack Lvl. 4"},
        {image: corndog_laplacian_5, caption: "Corndog Laplacian Stack Lvl. 5"},
        {image: blended_corncob_laplacian_0, caption: "Blended Corncob Laplacian Stack Lvl. 0"},
        {image: blended_corncob_laplacian_1, caption: "Blended Corncob Laplacian Stack Lvl. 1"},
        {image: blended_corncob_laplacian_2, caption: "Blended Corncob Laplacian Stack Lvl. 2"},
        {image: blended_corncob_laplacian_3, caption: "Blended Corncob Laplacian Stack Lvl. 3"},
        {image: blended_corncob_laplacian_4, caption: "Blended Corncob Laplacian Stack Lvl. 4"},
        {image: blended_corncob_laplacian_5, caption: "Blended Corncob Laplacian Stack Lvl. 5"},
        {image: blended_corndog_laplacian_0, caption: "Blended Corndog Laplacian Stack Lvl. 0"},
        {image: blended_corndog_laplacian_1, caption: "Blended Corndog Laplacian Stack Lvl. 1"},
        {image: blended_corndog_laplacian_2, caption: "Blended Corndog Laplacian Stack Lvl. 2"},
        {image: blended_corndog_laplacian_3, caption: "Blended Corndog Laplacian Stack Lvl. 3"},
        {image: blended_corndog_laplacian_4, caption: "Blended Corndog Laplacian Stack Lvl. 4"},
        {image: blended_corndog_laplacian_5, caption: "Blended Corndog Laplacian Stack Lvl. 5"},
        {image: corncob_corndog_hybrid_0, caption: "Corncob-Dog Hybrid Stack Lvl. 0"},
        {image: corncob_corndog_hybrid_1, caption: "Corncob-Dog Hybrid Stack Lvl. 1"},
        {image: corncob_corndog_hybrid_2, caption: "Corncob-Dog Hybrid Stack Lvl. 2"},
        {image: corncob_corndog_hybrid_3, caption: "Corncob-Dog Hybrid Stack Lvl. 3"},
        {image: corncob_corndog_hybrid_4, caption: "Corncob-Dog Hybrid Stack Lvl. 4"},
        {image: corncob_corndog_hybrid_5, caption: "Corncob-Dog Hybrid Stack Lvl. 5"}
    ]

    const corncob_corndog_res = [
        {image: blended_corncob, caption: "Blended Corncob"},
        {image: blended_corndog, caption: "Blended Corndog"},
        {image: corncob_corndog_hybrid, caption: "Final Blended (Corncob-Dog)"}
    ]





    return (
        <div className="main">
            <h1 className="main-header">Project #2: Fun With Filters and Frequencies</h1>
            <div className="content">
                <h1 className="lvl2-header">Overview</h1>
                <p className="text">
                    In this project, we use our learning on filters and frequencies for sharpening, hybridization, and blending. We will start by 
                    implementing basic sharpening and contour extraction, and build on these elementary ideas for hybridization and 
                    multiresoultion blending.
                </p>
                <h1 className="lvl2-header">Part 1: Fun With Filters</h1>
                <h1 className="lvl3-header">Part 1.1: Finite Difference Operators</h1>
                <p className="text">
                    In this section, we use the finite different filters in x and y directions to find the partial derivative in x and y of the cameraman.
                    We define dx = [-1, 0, 1] and dy = [-1, 0, 1]^T as the filters for the x and y directions, respectively. We then convolve the cameraman
                    with each of these filters to find the partial derivatives of the in x and y directions. After doing so, we can combine these two partial derivatives
                    to find the gradient magnitude of the, which we can binarize to find the edges of the.
                    <br /><br />
                    More specifically, we convolve using scipy.signal.convolve2d function, which we will be using throughout the remainder of this project as well. 
                    We use the mode='same' argument to ensure that the output of the convolution has the same dimensions as the input. To calculate gradient magnitude,
                    we take the square root of the sum of the squares of the partial derivatives in x and y directions. This results in the gradient magnitude. 
                    To remove noise and emphasize the edges, we binarize the gradient magnitude with a threshold of 90 (on 0-255 scale). We show the results below. 
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_1_1.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/>
                <h1 className="lvl3-header">Part 1.2: Derivative of Gaussian Filter (DoG)</h1>
                <p className="text">
                    As we can see from the previous part, the edges of the cameraman still seem to be noisy. They are not as prominent as we would like them to be. In this
                    part, we will explore how we can use the Gaussian filter in creating more prominent edges.
                </p>
                <br/>
                <h1 className="lvl4-header">Blurred Finite Difference</h1>
                <p className="text">
                    In this section, we will attempt to blur the cameraman before applying our finite difference filtering procedure (as we did in 1.1). The idea behind
                    this is to remove any noise that could be affecting our final result, hopefully leading to cleaner edges in our final. We use a gaussian kernel of 
                    size 13x13 with sigma = (kernel_size / 6.0). This choice of sigma is a common heuristic for creating a gaussian kernel. We convolve the filter with the 
                    cameraman to produce a blurred version of the cameraman. Then, we apply the same finite difference filtering procedure as in 1.1 to find the partial
                    derivatives of the with respect to x and y. Finally, we compute the binarized gradient magnitude as we did earlier. We use a threshold of 110, 
                    which was determined to be the most effective empirically. We show results below.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_1_2_1.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/>
                <h1 className="lvl4-header">Derivative of Gaussian (DoG)</h1>
                <p className="text">
                    We can actually combine the blurring and finite difference filtering into a single step, taking advantage of convolution's properties of commutativity.
                    We will take the derivative of our 2D gaussian kernel with respect to both x and y. Each of these partial derivatives of gaussians can be referred to as 
                    dog_dx and dog_dy. We then convolve the cameraman with these two DoG filters to find the partial derivatives of the in x and y directions. From there,
                    we follow a very similar procedure to the one we have already done twice. We combine the partial derivatives to find the gradient magnitude of the, and binarize.
                    We keep all parameters the same as 1.2.1. We show the filters below.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_1_2_filters.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br />
                <p className="text">We see above that the two DoGs are symmetric, which is what we expected (since gaussians themselves are symmetric). Results are below.</p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_1_2_2.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br />
                <p className="text">Clearly, the edge prominence from using the blurred finite difference procedure from part 1.2.1 is still visible. But how close are our results 
                    when we compare them side-by-side? 
                </p>
                <br/>
                <h1 className="lvl4-header">Side-by-Side</h1>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_1_2_comparison.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br />
                <p className="text">As it turns out, convolution's property of commutativity holds! Ignoring some minor noise due to convolution padding (because we have a finite signal), 
                    the two results are identical. 
                </p>
                <h1 className="lvl2-header">Part 2: Fun With Frequencies</h1>
                <h2 className="lvl3-header">Part 2.1: Sharpening</h2>
                <p className="text">
                    In this section, we will explore how we can use low-pass filtering to sharpen an. More specifically, we will use a Gaussian filter to blur an input img, resulting in 
                    img_blurred. To extract the high-frequency features, we calculate high_freq_img = img - img_blurred. To sharpen the original, we calculate: img_sharpened = img + alpha * high_freq_img, where
                    alpha is some real constant. We use a Gaussian kernel of size 15x15 with sigma = 15 / 6.0. We set alpha = 3.0. 
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_2_1_1.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br />
                <p className="text">We can see that the high frequency features of the Taj Mahal and the Moon are much more prominent in the sharpeneds. The dome of the Taj Mahal is especially
                    emphasized, and we can see the outline of individual bricks on the surface of the dome. The sharpening of the Moon is more subtle, but we still see certain physical features being 
                    highlighted (like patterns of elevation and craters). But, what happens if we take an that is already sharp, blur it, and then try to re-sharpen it? Will we be able to reproduce
                    the original? Intuitively, we will not be able to, since we lost information in the blurring process by taking a weighted Gaussian average of the pixels. Let's confirm
                    this empirically. 
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_2_1_2.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br />
                <p className="text">The leftmost is the original cat, and the middle is the blurred version of the cat. This is the input to our sharpening algorithm. The result
                    is shown in the rightmost. We can clearly see a distinction between the re-sharpened and the original. While the re-sharpened does emphasize some features of the 
                    blurred, it is not able to re-create features that were lost in the blurring process. The original has enough definition for us to see individual strands of fur, but the re-sharpened
                    does not hold this level of detail. In addition, there are some minor artifacts that result from re-sharpening. 
                </p>
                <br/>
                <h1 className="lvl3-header">Part 2.2: Hybrids</h1>
                <p className="text">
                    In this section, we explore how we can use a combination of low-pass and high-pass filtering to create hybrids. The basic intuition is that we can use filtering to combine
                    the low frequencies of one and the high frequencies of another. From a close distance, the high frequencies of B will dominate, but from a far distance, they will not be 
                    able to be seen. Therefore, from a far distance, the lower frequencies of A will dominate. 
                    <br /><br />
                    More technically, let us define twos: low_freq_img and high_freq_img. To produce the final result, we will extract low_freq = gaussian_blur_low(low_freq_img) and high_freq = high_freq_img - gaussian_blur_high(high_freq_img).
                    We calculate a weighted average to get our final result: hybrid = low_freq + high_freq * alpha (where alpha is a real constant). For the functions gaussian_blur_low and gaussian_blur_high, 
                    we use a Gaussian kernel (with low_freq_sigma and high_freq_sigma, respectively). For alls in the results, we use a kernel_size = int(2 * ceil(3 * sigma) + 1), which is a common heuristic
                    for calculating kernel size from sigma. Let's examine our results and appropriate parameter choices below.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '50px', marginTop: '40px' }}>
                    {data_2_2.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '250px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br />
                <p className="text">
                    Try zooming in and out to view the hybrids from different "distances". To emphasize this distinction, you can squint your eyes when zoomed out to further focus on the low frequencies in the. 
                    This will allow you to see the low frequency more clearly. While all four hybrids are interesting, it seems as though the algorithm we provide does not perform as well on the lion-tiger hybrid and 
                    the toronto hybrid. In the case of the lion-tiger hybrid, the must be viewed from a very far distance in order to see the tiger properly. This is because the features
                    of the lion are much brighter, and tend to dominate even from mid-far distances. In the case of the toronto hybrid, the new toronto skyline is so vastly different than the old toronto skyline that 
                    the hybrid is not as effective (overlapping buildings are minimal). This results in us still being able to see certain features of the old toronto skyline when viewing from a close distance, and vice-versa.
                    With extensive fine-tuning, however, I believe I was able to make these two hybrids as effective as possible. Let us now examine the FFTs of the cat-dog hybrid, throughout the hybridization process. 
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '50px', marginTop: '40px' }}>
                    {data_2_2_ffts.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '250px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br />
                <h1 className="lvl3-header">Bells & Whistles</h1>
                <h1 className="lvl4-header">Color</h1>
                <p className="text">
                    You'll notice above that all of the hybrids we generated are in-color. But there are many ways to approach this: we can choose to keep color from one of the two inputs, or keep color from both
                    inputs. Below we show the results of the four possibilities of color choice for nutmeg-derek hybrid.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '50px', marginTop: '40px' }}>
                    {data_2_2_colors.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '250px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br />
                <p className="text">
                    It looks like the most effective hybrid results from keeping the colors of both the inputs. Thus, in all of the previous results shown, we have color from boths.
                </p>
                <br/>
                <h1 className="lvl4-header">Weighting With Alpha Coefficient</h1>
                <p className="text">
                    The alpha coefficient is a real constant that determines the weight of the high frequency when we compute the average with low frequency. The reason I modified the 
                    naive averaging approach with this coefficient is to facilitate more effective hybridization whens have vastly different color scheme/brightness level. In many cases, 
                    the high frequency is completely dominated by the low frequency (since it contains mainly contours/edges). Because of this, having a higher alpha value can play a large role
                    in enabling the high frequency to be seen. As explained above in the results section, all of the results come from specifically-tuned alpha values.
                </p>
                <br/><br/>
                <h1 className="lvl3-header">Part 2.3: Gaussian and Laplacian Stacks</h1>
                <p className="text">
                    In this section, we produce an "oraple" by using Gaussian and Laplacian stacks to facilitate multiresolution blending.
                    We calculate a Gaussian stack by simply convolving a Gaussian kernel with the previous level's output to produce the subsequent stack level. 
                    We calculate the corresponding Laplacian stack by taking the difference between the current and previous Gaussian level. 
                    Mathematically, we have: L_i = G_i - G_(i-1), where G_0 is our original. The last layer of the Laplacian stack is equal to the last layer of the Gaussian stack. 
                    We can use this for multiresolution by first creating a mask, and then calculating the Gaussian stack of the mask (M). Then, we can create a blended hybrid stack with the formula:
                    H_i = M_i * L_i + (1 - M_i) * G_i. Taking the sum of the blended hybrid stack will give us our final blended.
                    <br/><br/>
                    We use a kernel_size = 15, mask_kernel_size = 50, sigma = kernel_size / 6.0, and number of stack levels = 6. Here are the intermediary results.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '50px', marginTop: '40px' }}>
                    {data_2_3.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '100px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                And the final results:
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '50px', marginTop: '40px' }}>
                    {data_2_3_res.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <h1 className="lvl3-header">Part 2.4: Gaussian and Laplacian Stacks</h1>
                <p className="text">
                    In this section, we produce similar blendings with a variety of others. With some of them, we even use irregular masks to blend more precisely. 
                </p>
                <br/><br/>
                <h1 className="lvl4-header">Basketball and Volleyball</h1>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '50px', marginTop: '40px' }}>
                    {basketball_volleyball.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                <br/><br/>
                <h1 className="lvl4-header">Chocolate Bar and Building</h1>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '50px', marginTop: '40px' }}>
                    {chocolatebar_building.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                <br/><br/>
                <h1 className="lvl4-header">Corncob and Corndog</h1>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '50px', marginTop: '40px' }}>
                    {corncob_corndog.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                <p className="text">
                    This is my favorite result, so here are all the intermediary results (like I provided for the Oraple).
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {corncob_corndog_full.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: '56%', maxWidth: '60px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <p className="text">
                    And the final blended results once again:
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '50px', marginTop: '40px' }}>
                    {corncob_corndog_res.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: '100%', maxWidth: '90px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                <br/><br/>
                <h1 className="lvl2-header">Conclusion</h1>
                <p className="text">
                    In this project, we cover a variety of topics in filtering and frequencies, and explored how we can use these concepts for image hybridization and multiresolution blending.
                    For me, the most important part of this project was the portion about hybridization. I found it fascinating how we can use different image frequencies to determine which features of 
                    an image stand out to a viewer, and at what viewing distance. 
                </p>
                <br/><br/><br/><br/>
            </div>
        </div>
    );
}

export default Proj02;