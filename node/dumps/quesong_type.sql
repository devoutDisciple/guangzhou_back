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
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT '美食' COMMENT '分类',
  `url` varchar(255) DEFAULT NULL,
  `campus` varchar(45) DEFAULT NULL COMMENT '所属校园',
  `sort` int(11) DEFAULT '1',
  `is_delete` int(11) DEFAULT '1' COMMENT '1 存在 2 删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'美食','https://quesong.top/attachment/images/2/2019/05/cWRam4A13LEZ434qMVWhqwv1MtZRM3.jpeg','清华大学',1,1),(2,'奶茶','https://quesong.top/attachment/images/2/2019/05/CVK0XEzxPEMHV0ppd2lePDP0Mex28Z.jpg','北京大学',4,1),(3,'水果','https://quesong.top/attachment/images/2/2019/05/lt971p57Lpfc1L8xxm85fB0795uc95.jpeg','北京大学',8,1),(4,'超市','https://quesong.top/attachment/images/2/2019/05/kPDQAiP3DKE1aUdAEWWKUwEHKdKUad.jpeg','清华大学',5,1),(5,'沙拉','https://quesong.top/attachment/images/2/2019/05/kPDQAiP3DKE1aUdAEWWKUwEHKdKUad.jpeg','清华大学',2,1),(6,'飞机','https://quesong.top/attachment/images/2/2019/05/kPDQAiP3DKE1aUdAEWWKUwEHKdKUad.jpeg','清华大学',6,1),(7,'奶茶','https://quesong.top/attachment/images/2/2019/05/kPDQAiP3DKE1aUdAEWWKUwEHKdKUad.jpeg','清华大学',7,1),(8,'热饮','https://quesong.top/attachment/images/2/2019/05/kPDQAiP3DKE1aUdAEWWKUwEHKdKUad.jpeg','清华大学',8,1);
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-04  1:32:50
