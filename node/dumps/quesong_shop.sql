-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: quesong
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL COMMENT '商家名称',
  `url` varchar(255) DEFAULT NULL,
  `typeid` int(11) NOT NULL DEFAULT '1' COMMENT '所属分类，默认属于第一类',
  `address` varchar(500) DEFAULT NULL COMMENT '商家地址',
  `campus` varchar(45) DEFAULT '1' COMMENT '校园信息',
  `sales` int(11) DEFAULT NULL COMMENT '月售',
  `desc` varchar(45) DEFAULT NULL COMMENT '商家描述，限定二十个字',
  `start_price` int(11) NOT NULL DEFAULT '0' COMMENT '多少钱起送',
  `send_price` varchar(45) NOT NULL DEFAULT '0' COMMENT '配送费\n',
  `special` varchar(800) DEFAULT NULL COMMENT '优惠 满减',
  `start_time` varchar(255) DEFAULT NULL COMMENT '开业时间',
  `end_time` varchar(255) DEFAULT NULL COMMENT '关门时间',
  `username` varchar(45) DEFAULT NULL COMMENT '登录该商家的用户名',
  `password` varchar(45) DEFAULT NULL COMMENT '登录该商家的账号密码',
  `package_cost` int(11) DEFAULT NULL COMMENT '餐盒费',
  `sort` int(11) DEFAULT '1' COMMENT '排序',
  `is_delete` int(11) DEFAULT '1' COMMENT '1 存在 2 删除',
  `invite` int(11) DEFAULT NULL COMMENT '1 支持自取 2 不支持自取',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='商家';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES (1,'一点点奶茶','https://quesong.top/attachment/images/2/2019/05/jAT1cacd9TeX82Ww2aWA5waiKizE0r.jpeg',2,NULL,'清华大学',81,'好喝的奶茶',60,'3','origin=30,discount=5@@origin=50,discount=8@@origin=100,discount=20',NULL,NULL,NULL,NULL,1,1,1,NULL),(2,'二食堂川湘风情盖浇饭','https://quesong.top/attachment/images/2/2019/05/kPDQAiP3DKE1aUdAEWWKUwEHKdKUad.jpeg',2,NULL,'北京大学',55,'北京大学二食堂',30,'20','origin=50,discount=10@@origin=80,discount=18',NULL,NULL,NULL,NULL,2,1,1,NULL);
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-04  1:32:48
