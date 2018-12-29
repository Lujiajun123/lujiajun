/*
Navicat MySQL Data Transfer

Source Server         : lemon
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : kede

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-29 16:10:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(50) NOT NULL,
  `qty` int(50) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `account` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('8', '20', '博士伦清朗一日水润高清日抛隐形眼镜30片装', 'images/yxyj (8).jpg', '965.00', '13620416218');
INSERT INTO `car` VALUES ('49', '108', '博士伦秀晶款蕾丝明眸日抛彩色隐形眼镜30片装-魅力棕黑色', 'images/cs (3).jpg', '234.00', '13620416218');
INSERT INTO `car` VALUES ('2', '212', '特惠组合装！库博倍新月抛6片装+爱尔康乐明护理液300ml+118ml*2 包邮', 'images/yxyj (2).jpg', '998.00', '13620416218');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `price` float(200,2) NOT NULL,
  `sales` int(200) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `qty` int(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=125 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '168元包邮！美若康沐氧硅水凝胶10片装3盒套装。', 'images/yxyj (1).jpg', '788.00', '1987', 'yxyj', null);
INSERT INTO `goods` VALUES ('2', '特惠组合装！库博倍新月抛6片装+爱尔康乐明护理液300ml+118ml*2 包邮', 'images/yxyj (2).jpg', '998.00', '3232', 'yxyj', null);
INSERT INTO `goods` VALUES ('3', '171元包邮！强生润眸两周6片装*2+全能护理液', 'images/yxyj (3).jpg', '22438.00', '424', 'yxyj', null);
INSERT INTO `goods` VALUES ('4', '库博欧柯视日抛隐形眼镜30片装', 'images/yxyj (4).jpg', '4421.00', '332131', 'yxyj', null);
INSERT INTO `goods` VALUES ('5', '库博清氧清硅水凝胶日抛隐形眼镜30片装', 'images/yxyj (5).jpg', '6378.00', '42', 'yxyj', null);
INSERT INTO `goods` VALUES ('6', '爱尔康视康舒视氧硅水凝胶月抛隐形眼镜6片装（新老包装随机发货）', 'images/yxyj (6).jpg', '983.00', '64327', 'yxyj', null);
INSERT INTO `goods` VALUES ('7', '库博清氧清硅水凝胶日抛隐形眼镜30片装', 'images/yxyj (7).jpg', '4265.00', '6824', 'yxyj', null);
INSERT INTO `goods` VALUES ('8', '博士伦清朗一日水润高清日抛隐形眼镜30片装', 'images/yxyj (8).jpg', '965.00', '3572', 'yxyj', null);
INSERT INTO `goods` VALUES ('9', '库博倍明视倍新月抛隐形眼镜6片装', 'images/yxyj (9).jpg', '239.00', '2378423', 'yxyj', null);
INSERT INTO `goods` VALUES ('10', '库博Biofinity佰视明硅水凝胶月抛隐形眼镜3片装', 'images/yxyj (10).jpg', '39843.00', '12', 'yxyj', null);
INSERT INTO `goods` VALUES ('11', '海昌EASY DAY优氧日抛隐形眼镜30片装（新老包装随机发）', 'images/yxyj (11).jpg', '879.00', '3487', 'yxyj', null);
INSERT INTO `goods` VALUES ('12', '强生安视优舒日隐形眼镜日抛30片装', 'images/yxyj (12).jpg', '434.00', '9732', 'yxyj', null);
INSERT INTO `goods` VALUES ('13', '171元包邮！强生润眸两周6片装*2+全能护理液480ml+100ml', 'images/yxyj (13).jpg', '9143.00', '1324', 'yxyj', null);
INSERT INTO `goods` VALUES ('14', '博士伦清朗舒适月抛隐形眼镜2片装', 'images/yxyj (14).jpg', '28746.00', '6745', 'yxyj', null);
INSERT INTO `goods` VALUES ('15', '博士伦清朗舒适月抛隐形眼镜6片装（新老包装随机发货）', 'images/yxyj (15).jpg', '94.00', '2342', 'yxyj', null);
INSERT INTO `goods` VALUES ('16', '强生安视优润眸两周抛隐形眼镜6片装', 'images/yxyj (16).jpg', '12.00', '7328', 'yxyj', null);
INSERT INTO `goods` VALUES ('17', '诺思纯晰隐形眼镜国际版月抛6片装NU-M', 'images/yxyj (17).jpg', '3237.00', '432', 'yxyj', null);
INSERT INTO `goods` VALUES ('18', '诺思纯晰日抛隐形眼镜30片装', 'images/yxyj (18).jpg', '5643.00', '4738', 'yxyj', null);
INSERT INTO `goods` VALUES ('19', '明基美若康沐氧硅水凝胶隐形眼镜日抛10片装（光度最高至-12.00D）', 'images/yxyj (19).jpg', '65438.00', '321', 'yxyj', null);
INSERT INTO `goods` VALUES ('20', '明基美若康沐氧硅水凝胶隐形眼镜日抛2片装（光度最高至-12.00D）', 'images/yxyj (20).jpg', '3176.00', '3232', 'yxyj', null);
INSERT INTO `goods` VALUES ('21', 'EMPORIO ARMANI板材框架眼镜0EA3050F 5026 55 玳瑁', 'images/kjyj (1).jpg', '799.00', '43', 'yxyj', null);
INSERT INTO `goods` VALUES ('22', 'EMPORIO ARMANI框架眼镜0EA1027 3001 55 黑色', 'images/kjyj (2).jpg', '729.00', '88', 'yxyj', null);
INSERT INTO `goods` VALUES ('23', 'EMPORIO ARMANI框架眼镜0EA1027 3003 55 枪色', 'images/kjyj (3).jpg', '899.00', '54', 'yxyj', null);
INSERT INTO `goods` VALUES ('24', 'EMPORIO ARMANI板材框架眼镜0EA3050F 5026 55 玳瑁', 'images/kjyj (1).jpg', '799.00', '43', 'yxyj', null);
INSERT INTO `goods` VALUES ('25', 'EMPORIO ARMANI框架眼镜0EA1027 3001 55 黑色', 'images/kjyj (2).jpg', '729.00', '88', 'yxyj', null);
INSERT INTO `goods` VALUES ('26', 'EMPORIO ARMANI框架眼镜0EA1027 3003 55 枪色', 'images/kjyj (3).jpg', '899.00', '54', 'yxyj', null);
INSERT INTO `goods` VALUES ('27', 'EMPORIO ARMANI板材框架眼镜0EA3050F 5026 55 玳瑁', 'images/kjyj (1).jpg', '799.00', '43', 'yxyj', null);
INSERT INTO `goods` VALUES ('28', 'EMPORIO ARMANI框架眼镜0EA1027 3001 55 黑色', 'images/kjyj (2).jpg', '729.00', '88', 'yxyj', null);
INSERT INTO `goods` VALUES ('29', 'EMPORIO ARMANI框架眼镜0EA1027 3003 55 枪色', 'images/kjyj (3).jpg', '899.00', '54', 'yxyj', null);
INSERT INTO `goods` VALUES ('30', 'EMPORIO ARMANI板材框架眼镜0EA3050F 5026 55 玳瑁', 'images/kjyj (1).jpg', '799.00', '43', 'yxyj', null);
INSERT INTO `goods` VALUES ('31', 'EMPORIO ARMANI框架眼镜0EA1027 3001 55 黑色', 'images/kjyj (2).jpg', '729.00', '88', 'yxyj', null);
INSERT INTO `goods` VALUES ('32', 'EMPORIO ARMANI框架眼镜0EA1027 3003 55 枪色', 'images/kjyj (3).jpg', '899.00', '54', 'yxyj', null);
INSERT INTO `goods` VALUES ('33', 'EMPORIO ARMANI板材框架眼镜0EA3050F 5026 55 玳瑁', 'images/kjyj (1).jpg', '799.00', '43', 'yxyj', null);
INSERT INTO `goods` VALUES ('34', 'EMPORIO ARMANI框架眼镜0EA1027 3001 55 黑色', 'images/kjyj (2).jpg', '729.00', '88', 'yxyj', null);
INSERT INTO `goods` VALUES ('35', 'EMPORIO ARMANI框架眼镜0EA1027 3003 55 枪色', 'images/kjyj (3).jpg', '899.00', '54', 'yxyj', null);
INSERT INTO `goods` VALUES ('36', 'EMPORIO ARMANI板材框架眼镜0EA3050F 5026 55 玳瑁', 'images/kjyj (1).jpg', '799.00', '43', 'yxyj', null);
INSERT INTO `goods` VALUES ('37', 'EMPORIO ARMANI框架眼镜0EA1027 3001 55 黑色', 'images/kjyj (2).jpg', '729.00', '88', 'yxyj', null);
INSERT INTO `goods` VALUES ('38', 'EMPORIO ARMANI框架眼镜0EA1027 3003 55 枪色', 'images/kjyj (3).jpg', '899.00', '54', 'yxyj', null);
INSERT INTO `goods` VALUES ('39', 'EMPORIO ARMANI板材框架眼镜0EA3050F 5026 55 玳瑁', 'images/kjyj (1).jpg', '799.00', '43', 'yxyj', null);
INSERT INTO `goods` VALUES ('40', 'EMPORIO ARMANI框架眼镜0EA1027 3001 55 黑色', 'images/kjyj (2).jpg', '729.00', '88', 'yxyj', null);
INSERT INTO `goods` VALUES ('41', 'EMPORIO ARMANI框架眼镜0EA1027 3003 55 枪色', 'images/kjyj (3).jpg', '899.00', '54', 'yxyj', null);
INSERT INTO `goods` VALUES ('42', '折合25元/盒：卫康幻影日抛5片装两盒', 'images/cs (1).jpg', '960.00', '3232', 'yxyj', null);
INSERT INTO `goods` VALUES ('43', '超值组合：强生define美瞳日抛5片装*4', 'images/cs (2).jpg', '940.00', '23', 'yxyj', null);
INSERT INTO `goods` VALUES ('44', '博士伦秀晶款蕾丝明眸日抛彩色隐形眼镜30片装-魅力棕黑色', 'images/cs (3).jpg', '234.00', '89', 'yxyj', null);
INSERT INTO `goods` VALUES ('45', '168元包邮：ReVIA蕾美彩色日抛30片装！', 'images/cs (4).jpg', '120.00', '234', 'yxyj', null);
INSERT INTO `goods` VALUES ('46', '博士伦蕾丝闪眸半年抛彩色隐形眼镜1片装-棕色', 'images/cs (5).jpg', '499.00', '124', 'yxyj', null);
INSERT INTO `goods` VALUES ('47', '折合25元/盒：卫康幻影日抛5片装两盒', 'images/cs (1).jpg', '960.00', '3232', 'yxyj', null);
INSERT INTO `goods` VALUES ('48', '超值组合：强生define美瞳日抛5片装*4', 'images/cs (2).jpg', '940.00', '23', 'yxyj', null);
INSERT INTO `goods` VALUES ('49', '博士伦秀晶款蕾丝明眸日抛彩色隐形眼镜30片装-魅力棕黑色', 'images/cs (3).jpg', '234.00', '89', 'yxyj', null);
INSERT INTO `goods` VALUES ('50', '168元包邮：ReVIA蕾美彩色日抛30片装！', 'images/cs (4).jpg', '120.00', '234', 'yxyj', null);
INSERT INTO `goods` VALUES ('51', '博士伦蕾丝闪眸半年抛彩色隐形眼镜1片装-棕色', 'images/cs (5).jpg', '499.00', '124', 'yxyj', null);
INSERT INTO `goods` VALUES ('52', '折合25元/盒：卫康幻影日抛5片装两盒', 'images/cs (1).jpg', '960.00', '3232', 'yxyj', null);
INSERT INTO `goods` VALUES ('53', '超值组合：强生define美瞳日抛5片装*4', 'images/cs (2).jpg', '940.00', '23', 'yxyj', null);
INSERT INTO `goods` VALUES ('54', '博士伦秀晶款蕾丝明眸日抛彩色隐形眼镜30片装-魅力棕黑色', 'images/cs (3).jpg', '234.00', '89', 'yxyj', null);
INSERT INTO `goods` VALUES ('55', '168元包邮：ReVIA蕾美彩色日抛30片装！', 'images/cs (4).jpg', '120.00', '234', 'yxyj', null);
INSERT INTO `goods` VALUES ('56', '博士伦蕾丝闪眸半年抛彩色隐形眼镜1片装-棕色', 'images/cs (5).jpg', '499.00', '124', 'yxyj', null);
INSERT INTO `goods` VALUES ('57', '折合25元/盒：卫康幻影日抛5片装两盒', 'images/cs (1).jpg', '960.00', '3232', 'yxyj', null);
INSERT INTO `goods` VALUES ('58', '超值组合：强生define美瞳日抛5片装*4', 'images/cs (2).jpg', '940.00', '23', 'yxyj', null);
INSERT INTO `goods` VALUES ('59', '博士伦秀晶款蕾丝明眸日抛彩色隐形眼镜30片装-魅力棕黑色', 'images/cs (3).jpg', '234.00', '89', 'yxyj', null);
INSERT INTO `goods` VALUES ('60', '168元包邮：ReVIA蕾美彩色日抛30片装！', 'images/cs (4).jpg', '120.00', '234', 'yxyj', null);
INSERT INTO `goods` VALUES ('61', '博士伦蕾丝闪眸半年抛彩色隐形眼镜1片装-棕色', 'images/cs (5).jpg', '499.00', '124', 'yxyj', null);
INSERT INTO `goods` VALUES ('62', '库博Biofinity佰视明月抛3片装', 'images/1f_1.jpg', '799.00', '111', '1f', null);
INSERT INTO `goods` VALUES ('63', '库博EDGE III XT欧柯莱视半年抛2片装', 'images/1f_2.jpg', '8199.00', '222', '1f', null);
INSERT INTO `goods` VALUES ('64', '博士伦清朗舒适月抛6片装', 'images/1f_3.jpg', '7699.00', '333', '1f', null);
INSERT INTO `goods` VALUES ('65', '库博Biofinity佰视明月抛3片装', 'images/1f_1.jpg', '799.00', '111', '1f', null);
INSERT INTO `goods` VALUES ('66', '库博EDGE III XT欧柯莱视半年抛2片装', 'images/1f_2.jpg', '8199.00', '222', '1f', null);
INSERT INTO `goods` VALUES ('67', '博士伦清朗舒适月抛6片装', 'images/1f_3.jpg', '7699.00', '333', '1f', null);
INSERT INTO `goods` VALUES ('68', '库博Biofinity佰视明月抛3片装', 'images/1f_1.jpg', '799.00', '111', '1f', null);
INSERT INTO `goods` VALUES ('69', '库博EDGE III XT欧柯莱视半年抛2片装', 'images/1f_2.jpg', '8199.00', '222', '1f', null);
INSERT INTO `goods` VALUES ('70', '博士伦清朗舒适月抛6片装', 'images/1f_3.jpg', '7699.00', '333', '1f', null);
INSERT INTO `goods` VALUES ('71', '库博Biofinity佰视明月抛3片装', 'images/1f_1.jpg', '799.00', '111', '1f', null);
INSERT INTO `goods` VALUES ('72', '库博EDGE III XT欧柯莱视半年抛2片装', 'images/1f_2.jpg', '8199.00', '222', '1f', null);
INSERT INTO `goods` VALUES ('73', '博士伦清朗舒适月抛6片装', 'images/1f_3.jpg', '7699.00', '333', '1f', null);
INSERT INTO `goods` VALUES ('74', '科莱博Ice Color彩色月抛2片装', 'images/2f_1g.jpg', '4569.00', '212', '2f', null);
INSERT INTO `goods` VALUES ('75', '海昌星眸印象之美日抛彩色10片装', 'images/2f_2.jpg', '6789.00', '222', '2f', null);
INSERT INTO `goods` VALUES ('76', '￥39.00NEO可视眸小黑环半年抛1片装', 'images/2f_3.jpg', '9843.00', '444', '2f', null);
INSERT INTO `goods` VALUES ('78', '科莱博Ice Color彩色月抛2片装', 'images/2f_1g.jpg', '4569.00', '212', '2f', null);
INSERT INTO `goods` VALUES ('79', '海昌星眸印象之美日抛彩色10片装', 'images/2f_2.jpg', '6789.00', '222', '2f', null);
INSERT INTO `goods` VALUES ('80', '￥39.00NEO可视眸小黑环半年抛1片装', 'images/2f_3.jpg', '9843.00', '444', '2f', null);
INSERT INTO `goods` VALUES ('81', '科莱博Ice Color彩色月抛2片装', 'images/2f_1g.jpg', '4569.00', '212', '2f', null);
INSERT INTO `goods` VALUES ('82', '海昌星眸印象之美日抛彩色10片装', 'images/2f_2.jpg', '6789.00', '222', '2f', null);
INSERT INTO `goods` VALUES ('83', '￥39.00NEO可视眸小黑环半年抛1片装', 'images/2f_3.jpg', '9843.00', '444', '2f', null);
INSERT INTO `goods` VALUES ('84', '￥39.00NEO可视眸小黑环半年抛1片装', 'images/2f_3.jpg', '9843.00', '444', '2f', null);
INSERT INTO `goods` VALUES ('85', '爱尔康傲滴护理液355ml*2+60ml', 'images/3f_1.jpg', '9434.00', '555', '3f', null);
INSERT INTO `goods` VALUES ('86', '优卓优妮卡多功能护理液350ml', 'images/3f_2.jpg', '3478.99', '333', '3f', null);
INSERT INTO `goods` VALUES ('87', '卫康新视护理液500ml', 'images/3f_3.jpg', '8745.50', '444', '3f', null);
INSERT INTO `goods` VALUES ('88', '爱尔康傲滴护理液355ml*2+60ml', 'images/3f_1.jpg', '9434.00', '555', '3f', null);
INSERT INTO `goods` VALUES ('89', '优卓优妮卡多功能护理液350ml', 'images/3f_2.jpg', '3478.99', '333', '3f', null);
INSERT INTO `goods` VALUES ('90', '卫康新视护理液500ml', 'images/3f_3.jpg', '8745.50', '444', '3f', null);
INSERT INTO `goods` VALUES ('91', '爱尔康傲滴护理液355ml*2+60ml', 'images/3f_1.jpg', '9434.00', '555', '3f', null);
INSERT INTO `goods` VALUES ('92', '优卓优妮卡多功能护理液350ml', 'images/3f_2.jpg', '3478.99', '333', '3f', null);
INSERT INTO `goods` VALUES ('93', '卫康新视护理液500ml', 'images/3f_3.jpg', '8745.50', '444', '3f', null);
INSERT INTO `goods` VALUES ('94', '爱尔康傲滴护理液355ml*2+60ml', 'images/3f_1.jpg', '9434.00', '555', '3f', null);
INSERT INTO `goods` VALUES ('95', '优卓优妮卡多功能护理液350ml', 'images/3f_2.jpg', '3478.99', '333', '3f', null);
INSERT INTO `goods` VALUES ('96', '卫康新视护理液500ml', 'images/3f_3.jpg', '8745.50', '444', '3f', null);
INSERT INTO `goods` VALUES ('97', 'RAY BAN雷朋眼镜架0RX6346', 'images/4f_1.jpg', '7865.49', '888', '4f', null);
INSERT INTO `goods` VALUES ('98', 'EMPORIO ARMANI阿玛尼眼镜架EA3070', 'images/4f_2.jpg', '8456.29', '444', '4f', null);
INSERT INTO `goods` VALUES ('99', 'BURBERRY柏博莉板材眼镜', 'images/4f_3.jpg', '4675.24', '888', '4f', null);
INSERT INTO `goods` VALUES ('100', 'RAY BAN雷朋眼镜架0RX6346', 'images/4f_1.jpg', '7865.49', '888', '4f', null);
INSERT INTO `goods` VALUES ('101', 'EMPORIO ARMANI阿玛尼眼镜架EA3070', 'images/4f_2.jpg', '8456.29', '444', '4f', null);
INSERT INTO `goods` VALUES ('102', 'BURBERRY柏博莉板材眼镜', 'images/4f_3.jpg', '4675.24', '888', '4f', null);
INSERT INTO `goods` VALUES ('103', 'RAY BAN雷朋眼镜架0RX6346', 'images/4f_1.jpg', '7865.49', '888', '4f', null);
INSERT INTO `goods` VALUES ('104', 'EMPORIO ARMANI阿玛尼眼镜架EA3070', 'images/4f_2.jpg', '8456.29', '444', '4f', null);
INSERT INTO `goods` VALUES ('105', 'BURBERRY柏博莉板材眼镜', 'images/4f_3.jpg', '4675.24', '888', '4f', null);
INSERT INTO `goods` VALUES ('106', 'RAY BAN雷朋眼镜架0RX6346', 'images/4f_1.jpg', '7865.49', '888', '4f', null);
INSERT INTO `goods` VALUES ('107', 'EMPORIO ARMANI阿玛尼眼镜架EA3070', 'images/4f_2.jpg', '8456.29', '444', '4f', null);
INSERT INTO `goods` VALUES ('108', 'BURBERRY柏博莉板材眼镜', 'images/4f_3.jpg', '4675.24', '888', '4f', null);
INSERT INTO `goods` VALUES ('109', '韩国春雨蜂蜜面膜10片', 'images/5f_1.jpg', '7845.35', '999', '5f', null);
INSERT INTO `goods` VALUES ('110', '吕臻萃恒护多效洗发水200g', 'images/5f_2.jpg', '8745.23', '777', '5f', null);
INSERT INTO `goods` VALUES ('111', '花印水漾润透免洗型补水面膜', 'images/5f_3.jpg', '3424.34', '666', '5f', null);
INSERT INTO `goods` VALUES ('112', '韩国春雨蜂蜜面膜10片', 'images/5f_1.jpg', '7845.35', '999', '5f', null);
INSERT INTO `goods` VALUES ('113', '吕臻萃恒护多效洗发水200g', 'images/5f_2.jpg', '8745.23', '777', '5f', null);
INSERT INTO `goods` VALUES ('114', '花印水漾润透免洗型补水面膜', 'images/5f_3.jpg', '3424.34', '666', '5f', null);
INSERT INTO `goods` VALUES ('115', '韩国春雨蜂蜜面膜10片', 'images/5f_1.jpg', '7845.35', '999', '5f', null);
INSERT INTO `goods` VALUES ('116', '吕臻萃恒护多效洗发水200g', 'images/5f_2.jpg', '8745.23', '777', '5f', null);
INSERT INTO `goods` VALUES ('117', '花印水漾润透免洗型补水面膜', 'images/5f_3.jpg', '3424.34', '666', '5f', null);
INSERT INTO `goods` VALUES ('118', '韩国春雨蜂蜜面膜10片', 'images/5f_1.jpg', '7845.35', '999', '5f', null);
INSERT INTO `goods` VALUES ('119', '吕臻萃恒护多效洗发水200g', 'images/5f_2.jpg', '8745.23', '777', '5f', null);
INSERT INTO `goods` VALUES ('120', '花印水漾润透免洗型补水面膜', 'images/5f_3.jpg', '3424.34', '666', '5f', null);
INSERT INTO `goods` VALUES ('121', '韩国春雨蜂蜜面膜10片', 'images/5f_1.jpg', '7845.35', '999', '5f', null);
INSERT INTO `goods` VALUES ('122', '吕臻萃恒护多效洗发水200g', 'images/5f_2.jpg', '8745.23', '777', '5f', null);
INSERT INTO `goods` VALUES ('123', '花印水漾润透免洗型补水面膜', 'images/5f_3.jpg', '3424.34', '666', '5f', null);
INSERT INTO `goods` VALUES ('124', '韩国春雨蜂蜜面膜10片', 'images/5f_1.jpg', '7845.35', '999', '5f', null);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `account` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('13620416218', 'qwer1234');
INSERT INTO `user` VALUES ('13620416217', 'aa123456');
INSERT INTO `user` VALUES ('13620416219', 'qwer1234');
INSERT INTO `user` VALUES ('13620416123', 'qwer1234');
INSERT INTO `user` VALUES ('13620416103', 'qwer1234');
INSERT INTO `user` VALUES ('13620416104', 'qwer1234');
SET FOREIGN_KEY_CHECKS=1;
