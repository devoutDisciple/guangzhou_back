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
-- Table structure for table `goods`
--

DROP TABLE IF EXISTS `goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `url` varchar(255) NOT NULL COMMENT '图片url',
  `desc` varchar(45) DEFAULT NULL COMMENT '描述',
  `sales` int(11) DEFAULT '0' COMMENT '月售',
  `price` int(11) DEFAULT '0' COMMENT '价格',
  `discount` int(11) DEFAULT '0' COMMENT '以前价格',
  `shopid` varchar(45) NOT NULL COMMENT '所属商家id',
  `type` varchar(45) DEFAULT NULL COMMENT '所属类别',
  `package_cost` varchar(45) DEFAULT NULL COMMENT '餐盒费用',
  `specification` varchar(800) DEFAULT NULL COMMENT '规格',
  `is_delete` int(11) DEFAULT '1' COMMENT '1 存在 2 删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goods`
--

LOCK TABLES `goods` WRITE;
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (1,'肉末茄子','https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg','好吃的茄子',115,10,75,'1','套餐','1','',1),(2,'腐竹烧肉','https://quesong.top/attachment/images/2/2019/05/aOYv8EX29S4yO8xxM8osv3UVO8IhVO.jpeg','好吃的腐竹烧肉',8,20,100,'1','盖饭','2',NULL,1),(3,'回锅肉','https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg','好吃的回锅肉',113,20,80,'1','套餐','3',NULL,1),(4,'蒜薹肉丝','https://quesong.top/attachment/images/2/2019/05/ToZ63oc5758n77CBzKYNY7kn353J6K.jpeg','nice',31,50,65,'2','盖浇饭','3',NULL,1);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-04  1:32:49
