var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'W5', 'text': '曲線圖 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n \n \n \n // 包含標準輸出入程式庫的標頭文件 \n // https://blog.csdn.net/weixin_38468077/article/details/101069365 \n // http://www.gnuplot.info/demo/ \n // https://github.com/sysprog21/rv32emu \n // https://github.com/sysprog21/semu \n // https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3 \n // https://cs61c.org/fa23/ \n // https://greenteapress.com/wp/think-python-2e/ \n // https://github.com/ecalvadi/c99-examples \n // https://github.com/gouravthakur39/beginners-C-program-examples \n // https://github.com/ergenekonyigit/Numerical-Analysis-Examples \n // https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf \n // https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf \n // https://jsommers.github.io/cbook/cbook.pdf \n // https://jsommers.github.io/cbook/index.html \n // http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf \n // http://cslibrary.stanford.edu/101/EssentialC.pdf \n // https://publications.gbdirect.co.uk/c_book/ \n // https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf \n // ***** execute on replit \n // cd downloads \n // cc gnuplot_ex1.c -o gnuplot_ex1 \n // ./gnuplot_ex1 \n #include <stdio.h> \n \xa0\xa0 \xa0 \n // 主函式 \n int   main() { \n \xa0\xa0\xa0\xa0 // Start a Gnuplot process using popen \n \xa0\xa0\xa0\xa0 FILE   *gnuplotPipe = popen( "gnuplot -persistent" ,  "w" ); \n \xa0\xa0\xa0\xa0 if   (!gnuplotPipe) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "Failed to start Gnuplot.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 // Use Gnuplot plotting commands, specify font and output as PNG \n \xa0\xa0\xa0\xa0 fprintf (gnuplotPipe,  "set terminal png font \'default,10\' size 800,400\\n" ); \n \xa0\xa0\xa0\xa0 fprintf (gnuplotPipe,  "set output \'./../images/gnuplot_ex1.png\'\\n" ); \n \xa0\xa0\xa0\xa0 fprintf (gnuplotPipe,  "plot sin(x)" ); \n \xa0\xa0\xa0\xa0 // Close popen \n \xa0\xa0\xa0\xa0 pclose(gnuplotPipe); \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '台灣國旗 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n \n \n \n // https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China \n // cc roc_flag.c -lgd -lm to link with gd and math library \n // https://www.rapidtables.com/web/color/RGB_Color.html \n // 幾何形狀著色與繪圖練習 \n // 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖 \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \xa0 \n void   draw_roc_flag(gdImagePtr img); \n void   draw_white_sun(gdImagePtr img,  int   center_x,  int   center_y,  int   sun_radius,  int   white,  int   red,  int   blue); \n \xa0 \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 // wdth 3: height 2 \n \xa0\xa0\xa0\xa0 int   width = 1200; \n \xa0\xa0\xa0\xa0 int   height = ( int )(width*2.0 / 3.0); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 draw_roc_flag(img); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 FILE   *outputFile =  fopen ( "./roc_flag.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "Error opening the output file.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 return   0; \n } \n \xa0 \xa0 \n void   draw_roc_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height = gdImageSY(img); \n \xa0\xa0\xa0\xa0 int   red, white, blue; \n \xa0\xa0\xa0\xa0 int   center_x = ( int )(width/4); \n \xa0\xa0\xa0\xa0 int   center_y = ( int )(height/4); \n \xa0\xa0\xa0\xa0 int   sun_radius = ( int )(width/8); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // Colors for the flag \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 242, 0, 0);  // Red color \n \xa0\xa0\xa0\xa0 white = gdImageColorAllocate(img, 255, 255, 255);  // White stripes \n \xa0\xa0\xa0\xa0 blue = gdImageColorAllocate(img, 0, 41, 204);  // Blue \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 繪製紅色矩形區域 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, red); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 繪製藍色矩形區域 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, ( int )(width/2.0), ( int )(height/2.0), blue); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 繪製太陽 \n \xa0\xa0\xa0\xa0 draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue); \n } \n void   draw_white_sun(gdImagePtr img,  int   center_x,  int   center_y,  int   sun_radius,  int   white,  int   red,  int   blue) { \n \xa0\xa0\xa0\xa0 float   angle = 0; \n \xa0\xa0\xa0\xa0 int   numRays = 12;  // 光芒的數量 \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 gdPoint points[3];  // 三個頂點的陣列 \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   i = 0; i < numRays; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 angle = i * (2 * M_PI / numRays); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 float   x1 = center_x +  cos (angle) * sun_radius; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 float   y1 = center_y +  sin (angle) * sun_radius; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 調整兩個底邊頂點的位置 \n \xa0\xa0\xa0\xa0\xa0\xa0 float   x2 = center_x +  cos (angle + 0.35) * (sun_radius * 0.5); \n \xa0\xa0\xa0\xa0\xa0\xa0 float   y2 = center_y +  sin (angle + 0.35) * (sun_radius * 0.5); \n \xa0\xa0\xa0\xa0\xa0\xa0 float   x3 = center_x +  cos (angle - 0.35) * (sun_radius * 0.5); \n \xa0\xa0\xa0\xa0\xa0\xa0 float   y3 = center_y +  sin (angle - 0.35) * (sun_radius * 0.5); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 設定多邊形的三個頂點 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[0].x = ( int )x1; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[0].y = ( int )y1; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[1].x = ( int )x2; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[1].y = ( int )y2; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[2].x = ( int )x3; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[2].y = ( int )y3; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points, 3, white); \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0 //外圈 \n \xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 繪製太陽內部 \n \xa0\xa0\xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white); \n } \n \n \n \n \n \n \n \n \n \n 美國國旗 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n \n \n \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \xa0 \n void   draw_usa_flag(gdImagePtr img); \n void   draw_star(gdImagePtr img,  int   x,  int   y,  int   size,  int   color,  double   rotation_angle); \n \xa0 \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 int   width = 800; \n \xa0\xa0\xa0\xa0 int   height = ( int )(width / 1.9); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 draw_usa_flag(img); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 FILE   *outputFile =  fopen ( "./../images/usa_flag.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "打开输出文件时出错。\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \xa0 \xa0 \n void   draw_usa_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height = gdImageSY(img); \n \xa0\xa0\xa0\xa0 int   red, white, blue; \n \xa0\xa0\xa0\xa0 // 国旗颜色 \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 178, 34, 52);  // 红色条纹 \n \xa0\xa0\xa0\xa0 white = gdImageColorAllocate(img, 255, 255, 255);  // 白色条纹 \n \xa0\xa0\xa0\xa0 blue = gdImageColorAllocate(img, 60, 59, 110);  // 蓝色矩形 \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 int   stripe_height = height / 13; \n \xa0\xa0\xa0\xa0 int   stripe_width = width; \n \xa0\xa0\xa0\xa0 int   star_size = ( int )(0.0308 * height);  // 星星大小 \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   y = 0; y < height; y += stripe_height) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (y / stripe_height % 2 == 0) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }  else   { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 int   star_spacing_x = ( int )(0.129 * height);  // 横向星星之间的间距 \n \xa0\xa0\xa0\xa0 int   star_spacing_y = ( int )(0.054 * height);  // 纵向星星之间的间距 \n \xa0\xa0\xa0\xa0 int   star_start_x = ( int )(0.125 * height);  // 星星的起始X位置 \n \xa0\xa0\xa0\xa0 int   star_start_y = ( int )(0.0485 * height);  // 星星的起始Y位置 \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   row = 0; row < 9; row++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   starsPerRow = (row % 2 == 0) ? 6 : 5; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 计算2、4、6和8排星星的偏移量 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   ( int   star = 0; star < starsPerRow; star++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   x = star_start_x + star * star_spacing_x + offset_x; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 旋转角度（以弧度为单位） \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 double   rotation_angle = M_PI / 5;  // 忘記多少度的旋转 \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   y = star_start_y + row * star_spacing_y; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 draw_star(img, x, y, star_size, white, rotation_angle); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 } \n } \n \xa0 \xa0 \n void   draw_star(gdImagePtr img,  int   x,  int   y,  int   size,  int   color,  double   rotation_angle) { \n \xa0\xa0\xa0\xa0 gdPoint points[10]; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   i = 0; i < 10; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 double   angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   radius = (i % 2 == 0) ? size : size / 2; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[i].x = x + radius *  cos (angle); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[i].y = y + radius *  sin (angle); \n \xa0\xa0\xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 用指定的颜色填充星星 \n \xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points, 10, color); \n } \n \n \n \n \n \n \n \n \n 日本國旗 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n \n \n \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \xa0 \n void   draw_japan_flag(gdImagePtr img); \n void   draw_red_sun(gdImagePtr img,  int   x,  int   y,  int   size,  int   color); \n \xa0 \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 int   originalWidth = 1200; \n \xa0\xa0\xa0\xa0 int   originalHeight = ( int )(originalWidth * 2.0 / 3.0); \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 draw_japan_flag(img); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 新的宽度和高度以适应 "images" 文件夹 \n \xa0\xa0\xa0\xa0 int   newWidth = 600; \n \xa0\xa0\xa0\xa0 int   newHeight = ( int )(newWidth * 2.0 / 3.0); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 创建新图像并进行缩放 \n \xa0\xa0\xa0\xa0 gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(resizedImage, 0); \n \xa0\xa0\xa0\xa0 gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight); \n \xa0 \xa0 \n \xa0\xa0 FILE   *outputFile =  fopen ( "./../images/japan_flag.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "Error opening the output file.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 gdImagePng(resizedImage, outputFile); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 gdImageDestroy(resizedImage); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \xa0 \xa0 \n void   draw_japan_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height = gdImageSY(img); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 创建一个白色背景 \n \xa0\xa0\xa0\xa0 int   white = gdImageColorAllocate(img, 255, 255, 255); \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 绘制红色圆圈（太阳） \n \xa0\xa0\xa0\xa0 int   red = gdImageColorAllocate(img, 255, 0, 0); \n \xa0\xa0\xa0\xa0 int   center_x = width / 2; \n \xa0\xa0\xa0\xa0 int   center_y = height / 2; \n \xa0\xa0\xa0\xa0 int   radius = ( int )((width * 2) / 3); \n \xa0\xa0\xa0\xa0 draw_red_sun(img, center_x, center_y, radius, red); \n } \n \xa0 \xa0 \n void   draw_red_sun(gdImagePtr img,  int   x,  int   y,  int   size,  int   color) { \n \xa0\xa0 // 減小 size 的值,例如將他的值減半 \n \xa0\xa0 size = size / 2; \n \xa0\xa0\xa0\xa0 gdImageArc(img, x, y, size, size, 0, 360, color); \n \xa0\xa0\xa0\xa0 gdImageFillToBorder(img, x, y, color, color); \n } \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 中國國旗 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n \n \n \n #include < stdio.h > \n #include < gd.h > \n #include < math.h > \n \xa0 \xa0 \n void draw_proc_flag(gdImagePtr img); \n \xa0 \xa0 \n int main() { \n \xa0\xa0\xa0\xa0 int width = 300; // 國旗寬度 \n \xa0\xa0\xa0\xa0 int height = 200; // 國旗高度 \n \xa0 \xa0 \n \xa0 \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr im = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(im, 0); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 draw_proc_flag(im); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 FILE *outputFile = fopen("./../images/proc_flag.png", "wb"); \n \xa0\xa0\xa0\xa0 if (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf(stderr, "打開輸出檔案時出錯。\\n"); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return 1; \n \xa0\xa0\xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 gdImagePngEx(im, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose(outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(im); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 return 0; \n } \n \xa0 \xa0 \n // 聲明 draw_star 函數 \n void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle); \n \xa0 \xa0 \n void draw_proc_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int height = gdImageSY(img); \n \xa0\xa0\xa0\xa0 int red, yellow; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 國旗顏色 \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景 \n \xa0\xa0\xa0\xa0 yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星 \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 畫紅色背景 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, red); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 設置星星的大小和位置 \n \xa0\xa0\xa0\xa0 int star_size = (int)(0.28 * height); \n \xa0\xa0\xa0\xa0 int star_x = (int)(0.165 * width); \n \xa0\xa0\xa0\xa0 int star_y = (int)(0.265 * height); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 畫大星星 \n \xa0\xa0\xa0\xa0 draw_star(img, star_x, star_y, star_size, yellow, 11.0); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 繪製小星星，位置根據實際國旗比例計算 \n \xa0\xa0\xa0\xa0 double radius = 0.15 * height; \n \xa0\xa0\xa0\xa0 double angle = 360 / 7 * M_PI / 179.0; \n \xa0\xa0\xa0\xa0 double rotation = -M_PI / 7.5; \n \xa0\xa0\xa0\xa0 int cx = (int)(0.32 * width); \n \xa0\xa0\xa0\xa0 int cy = (int)(0.27 * height); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 for (int i = -1; i < 3; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int x = (int)(cx + radius * cos(i * angle + rotation)); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int y = (int)(cy + radius * sin(i * angle + rotation)); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 draw_star(img, x, y, 19, yellow, M_PI / 5.0); \n \xa0\xa0\xa0\xa0 } \n } \n \xa0 \xa0 \n void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) { \n \xa0\xa0\xa0\xa0 gdPoint points[10]; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 計算星形的五個外點和五個內點 \n \xa0\xa0\xa0\xa0 double outer_radius = size / 2; \n \xa0\xa0\xa0\xa0 double inner_radius = size / 6; \n \xa0\xa0\xa0\xa0 double angle = M_PI / 5.0; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 for (int i = 0; i < 10; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 double radius = (i % 2 == 0) ? outer_radius : inner_radius; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 double theta = rotation_angle + i * angle; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[i].x = x + radius * cos(theta); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[i].y = y + radius * sin(theta); \n \xa0\xa0\xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 使用 gdImageFilledPolygon 繪製星形 \n \xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points, 10, color); \n } \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 英國國旗 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n 97 \n 98 \n 99 \n 100 \n 101 \n 102 \n 103 \n 104 \n 105 \n 106 \n 107 \n 108 \n 109 \n 110 \n 111 \n 112 \n 113 \n 114 \n 115 \n 116 \n 117 \n 118 \n 119 \n 120 \n 121 \n 122 \n 123 \n 124 \n 125 \n 126 \n 127 \n 128 \n 129 \n 130 \n 131 \n 132 \n 133 \n 134 \n 135 \n 136 \n 137 \n 138 \n \n \n \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \n void   draw_uk_flag(gdImagePtr img); \n void   fillTriangle(gdImagePtr img,  int   x1,  int   y1,  int   x2,  int   y2,  int   x3,  int   y3,  int   color); \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 // 设置国旗的宽和高 \n \xa0\xa0\xa0\xa0 int   width = 1200; \n \xa0\xa0\xa0\xa0 int   height = width / 2; \n \xa0 \n \xa0\xa0\xa0\xa0 // 创建图像 \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制英国国旗 \n \xa0\xa0\xa0\xa0 draw_uk_flag(img); \n \xa0 \n \xa0\xa0\xa0\xa0 // 将图像保存到文件 \n \xa0\xa0\xa0\xa0 FILE   *outputFile =  fopen ( "./../images/uk_flag.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "打开输出文件时发生错误。\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 return   0; \n } \n \xa0 \n \xa0 \n \xa0 \n void   draw_uk_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height = gdImageSY(img); \n \xa0 \n \xa0\xa0\xa0\xa0 int   red, white, blue; \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 204, 0, 0);\xa0\xa0\xa0\xa0\xa0\xa0  // 红色 \n \xa0\xa0\xa0\xa0 white = gdImageColorAllocate(img, 255, 255, 255);  // 白色 \n \xa0\xa0\xa0\xa0 blue = gdImageColorAllocate(img, 0, 0, 153);\xa0\xa0\xa0\xa0\xa0  // 蓝色 \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, blue); \n \xa0 \n \xa0 \n \xa0\xa0 int   x1, y1, x2, y2, x3, y3; \n \xa0\xa0 { \n \xa0\xa0\xa0\xa0 int   line_thickness = 100; \n \xa0\xa0\xa0\xa0 gdImageSetThickness(img, line_thickness); \n \xa0 \n \xa0\xa0\xa0\xa0 int   x1, y1, x2, y2, x3, y3; \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制白色斜线 \n \xa0\xa0\xa0\xa0 x1 = 0; \n \xa0\xa0\xa0\xa0 y1 = 600; \n \xa0\xa0\xa0\xa0 x2 = 1200; \n \xa0\xa0\xa0\xa0 y2 = 0; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, white); \n \xa0 \n \xa0\xa0\xa0\xa0 x1 = 0; \n \xa0\xa0\xa0\xa0 y1 = 0; \n \xa0\xa0\xa0\xa0 x2 = 1200; \n \xa0\xa0\xa0\xa0 y2 = 600; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, white); \n } \n \xa0\xa0 { \n \xa0\xa0\xa0\xa0 int   line_thickness = 33; \n \xa0\xa0\xa0\xa0 gdImageSetThickness(img, line_thickness); \n \xa0 \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制红色斜线 \n \xa0\xa0\xa0\xa0 x1 = 566; \n \xa0\xa0\xa0\xa0 y1 = 300; \n \xa0\xa0\xa0\xa0 x2 = 1166; \n \xa0\xa0\xa0\xa0 y2 = 0; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, red); \n \xa0 \n \xa0\xa0\xa0\xa0 x1 = 1233; \n \xa0\xa0\xa0\xa0 y1 = 600; \n \xa0\xa0\xa0\xa0 x2 = 633; \n \xa0\xa0\xa0\xa0 y2 = 300; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, red); \n \xa0 \n \xa0\xa0\xa0\xa0 x1 = 566; \n \xa0\xa0\xa0\xa0 y1 = 300; \n \xa0\xa0\xa0\xa0 x2 = -33; \n \xa0\xa0\xa0\xa0 y2 = 0; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, red); \n \xa0 \n \xa0\xa0\xa0\xa0 x1 = 600; \n \xa0\xa0\xa0\xa0 y1 = 316.5; \n \xa0\xa0\xa0\xa0 x2 = 0; \n \xa0\xa0\xa0\xa0 y2 = 616.5; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, red); \n \xa0\xa0 } \n \xa0\xa0 { \n \xa0\xa0 int   line_thickness = 33; \n \xa0\xa0 gdImageSetThickness(img, line_thickness); \n \xa0 \n \xa0\xa0 int   x1, y1, x2, y2, x3, y3; \n \xa0 \n \xa0\xa0 // 绘制\xa0 斜线 \n \xa0\xa0 x1 = 0; \n \xa0\xa0 y1 = 600; \n \xa0\xa0 x2 = 1200; \n \xa0\xa0 y2 = 0; \n \xa0\xa0 gdImageLine(img, x1, y1, x2, y2, red ); \n \xa0 \n \xa0 \n \xa0\xa0 x1 = 1200; \n \xa0\xa0\xa0\xa0 y1 = 16.5; \n \xa0\xa0\xa0\xa0 x2 = 600; \n \xa0\xa0\xa0\xa0 y2 = 316.5; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, white); \n \xa0 \n \xa0 \n \xa0\xa0 x1 = 0; \n \xa0\xa0\xa0\xa0 y1 = 583.5; \n \xa0\xa0\xa0\xa0 x2 = 600; \n \xa0\xa0\xa0\xa0 y2 = 283.5; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, white); \n \xa0 \n \xa0 \n \xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制白色十字 \n \xa0\xa0\xa0\xa0 int   cross_width = width / 32; \n \xa0\xa0\xa0\xa0 int   cross_arm_width = width / 32; \n \xa0\xa0\xa0\xa0 int   center_x = width / 2; \n \xa0\xa0\xa0\xa0 int   center_y = height / 2; \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white); \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white); \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制红色十字 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red); \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red); \n } \n \n \n \n \n \n \n \n \n 韓國國旗 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n 97 \n 98 \n 99 \n 100 \n 101 \n 102 \n 103 \n 104 \n 105 \n 106 \n 107 \n 108 \n 109 \n 110 \n 111 \n 112 \n 113 \n 114 \n 115 \n 116 \n 117 \n 118 \n 119 \n 120 \n 121 \n 122 \n \n \n \n //https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China \n // 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621 \n // cc roc_flag_in_gd.c -lgd -lm to link with gd and math library \n // https://www.rapidtables.com/web/color/RGB_Color.html \n // 幾何形狀著色與繪圖練習 \n // 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖 \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \n void   draw_roc_flag(gdImagePtr img); \n void   draw_white_sun(gdImagePtr img,  int   x,  int   y,  int   size,  int   color); \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 // width 3: height 2 \n \xa0\xa0\xa0\xa0 int   width = 1200; \n \xa0\xa0\xa0\xa0 // 國旗長寬比為 3:2 \n \xa0\xa0\xa0\xa0 int   height = ( int )(width*2.0 / 3.0); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \n \xa0\xa0\xa0\xa0 draw_roc_flag(img); \n \xa0 \n \xa0\xa0\xa0\xa0 FILE *outputFile = fopen( "./../images/roc_flag_in_gd.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf(stderr,  "Error opening the output file.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose(outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 return   0; \n } \n \xa0 \n void   draw_roc_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height = gdImageSY(img); \n \xa0\xa0\xa0\xa0 int   red, white, blue; \n \xa0\xa0\xa0\xa0 // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處 \n \xa0\xa0\xa0\xa0 int   center_x = ( int )(width/4); \n \xa0\xa0\xa0\xa0 int   center_y = ( int )(height/4); \n \xa0\xa0\xa0\xa0 // gdImageFilledEllipse 需以長寬方向的 diameter 作圖 \n \xa0\xa0\xa0\xa0 // 由於中央白日圓形的半徑為青天寬度的 1/8 \n \xa0\xa0\xa0\xa0 // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8 \n \xa0\xa0\xa0\xa0 // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8 \n \xa0\xa0\xa0\xa0 int   sun_radius = ( int )(width/8); \n \xa0\xa0\xa0\xa0 // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑 \n \xa0\xa0\xa0\xa0 int   white_circle_dia = sun_radius; \n \xa0\xa0\xa0\xa0 // 中央藍色圓形半徑為中央白日的 1又 2/15 \n \xa0\xa0\xa0\xa0 int   blue_circle_dia = white_circle_dia +\xa0 white_circle_dia*2/15; \n \xa0\xa0\xa0\xa0 // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值 \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 255, 0, 0);  // 紅色 \n \xa0\xa0\xa0\xa0 white = gdImageColorAllocate(img, 255, 255, 255);  // 白色 \n \xa0\xa0\xa0\xa0 blue = gdImageColorAllocate(img, 0, 0, 149);  // 藍色 \n \xa0\xa0\xa0\xa0 // 根據畫布大小塗上紅色長方形區域 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, red); \n \xa0\xa0\xa0\xa0 // 青天面積為整面國旗的 1/4, 也是採用長方形塗色 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, ( int )(width/2.0), ( int )(height/2.0), blue); \n \xa0\xa0\xa0\xa0 // 先設法以填色畫出六個白色堆疊菱形 \n \xa0\xa0\xa0\xa0 draw_white_sun(img, center_x, center_y, sun_radius, white); \n \xa0\xa0\xa0\xa0 // 利用一個藍色大圓與白色小圓畫出藍色環狀 \n \xa0\xa0\xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue); \n \xa0\xa0\xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white); \n \xa0 \n } \n \xa0 \n void   draw_white_sun(gdImagePtr img,  int   center_x,  int   center_y,  int   sun_radius,  int   color) { \n \xa0\xa0\xa0\xa0 // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位 \n \xa0\xa0\xa0\xa0 // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度 \n \xa0\xa0\xa0\xa0 float   deg = M_PI/180; \n \xa0\xa0\xa0\xa0 // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度 \n \xa0\xa0\xa0\xa0 // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小 \n \xa0\xa0\xa0\xa0 float   sr = sun_radius/tan(75*deg); \n \xa0\xa0\xa0\xa0 int   ax, ay, bx, by, dx, dy, ex, ey; \n \xa0\xa0\xa0\xa0 gdPoint points[4]; \n \xa0\xa0\xa0\xa0 /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確 \n \xa0\xa0\xa0\xa0 ax = center_x; \n \xa0\xa0\xa0\xa0 ay = center_y - sun_radius; \n \xa0\xa0\xa0\xa0 bx = center_x - sun_radius*tan(15*deg); \n \xa0\xa0\xa0\xa0 by = center_y; \n \xa0\xa0\xa0\xa0 ex = center_x; \n \xa0\xa0\xa0\xa0 ey = center_y + sun_radius; \n \xa0\xa0\xa0\xa0 dx = center_x + sun_radius*tan(15*deg); \n \xa0\xa0\xa0\xa0 dy = center_y; \n \xa0\xa0\xa0\xa0 // AB \n \xa0\xa0\xa0\xa0 gdImageLine(img, ax, ay, bx, by, color); \n \xa0\xa0\xa0\xa0 // BE \n \xa0\xa0\xa0\xa0 gdImageLine(img, bx, by, ex, ey, color); \n \xa0\xa0\xa0\xa0 // ED \n \xa0\xa0\xa0\xa0 gdImageLine(img, ex, ey, dx, dy, color); \n \xa0\xa0\xa0\xa0 // DA \n \xa0\xa0\xa0\xa0 gdImageLine(img, dx, dy, ax, ay, color); \n \xa0\xa0\xa0\xa0 */ \n \xa0\xa0\xa0\xa0 ax = center_x; \n \xa0\xa0\xa0\xa0 ay = center_y - sun_radius; \n \xa0\xa0\xa0\xa0 bx = center_x - sun_radius*tan(15*deg); \n \xa0\xa0\xa0\xa0 by = center_y; \n \xa0\xa0\xa0\xa0 ex = center_x; \n \xa0\xa0\xa0\xa0 ey = center_y + sun_radius; \n \xa0\xa0\xa0\xa0 dx = center_x + sun_radius*tan(15*deg); \n \xa0\xa0\xa0\xa0 dy = center_y; \n \xa0\xa0\xa0\xa0 // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域 \n \xa0\xa0\xa0\xa0 for   ( int   i=1;i<=6;i++){ \n \xa0\xa0\xa0\xa0 // A \n \xa0\xa0\xa0\xa0 points[0].x = ax+sun_radius*sin(30*deg*i); \n \xa0\xa0\xa0\xa0 points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i); \n \xa0\xa0\xa0\xa0 // B \n \xa0\xa0\xa0\xa0 points[1].x = bx+sr-sr*cos(30*deg*i); \n \xa0\xa0\xa0\xa0 points[1].y = by-sr*sin(30*deg*i); \n \xa0\xa0\xa0\xa0 // E \n \xa0\xa0\xa0\xa0 points[2].x = ex-sun_radius*sin(30*deg*i); \n \xa0\xa0\xa0\xa0 points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i)); \n \xa0\xa0\xa0\xa0 // D \n \xa0\xa0\xa0\xa0 points[3].x = dx-(sr-sr*cos(30*deg*i)); \n \xa0\xa0\xa0\xa0 points[3].y = dy+sr*sin(30*deg*i); \n \xa0\xa0\xa0\xa0 // 對菱形區域範圍塗色 \n \xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points, 4, color); \n \xa0\xa0\xa0\xa0 // 在菱形區域外圍畫線, 明確界定菱形範圍 \n \xa0\xa0\xa0\xa0 gdImagePolygon(img, points, 4, color); \n \xa0\xa0\xa0\xa0 } \n } \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'W13', 'text': '這次的課程老師講解我實在是聽不太了解，我還是希望我們可以先從最簡單的程式語言開始學起，老師上課講解運用到太多專業名詞讓大家覺得很陌生。原本我認為這會是可以覺得很好玩的一門課結果並不是我想像的那麼輕鬆。從網站架設到如何維護這或許對我們來說太困難，雖然有了所謂的ChatGPT的出現可以讓課程可以不斷詢問它，但我認為一個初學者應該也不知道要從何問起才能完成這樣作業。 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};