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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) NOT NULL COMMENT '用户的唯一标示',
  `name` varchar(255) NOT NULL,
  `avatarUrl` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL COMMENT '1 男同学 2 女同学',
  `username` varchar(45) DEFAULT NULL,
  `address` varchar(10000) DEFAULT NULL COMMENT '校外地址',
  `is_delete` int(11) DEFAULT '1' COMMENT '1 存在 2 删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `openid_UNIQUE` (`openid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (5,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','','1111','1','zhang','[{\"isSchool\":true,\"campus\":\"上海 上海 北京大学\",\"floor\":\"宿舍楼 2号楼\",\"home\":\"222\",\"username\":\"test1\",\"sex\":\"1\",\"phone\":\"15200000\",\"otherPhone\":\"1530000\",\"default\":true},{\"isSchool\":false,\"family\":\"校外三里屯发顺丰\",\"table\":\"123\",\"username\":\"女同学232\",\"sex\":\"2\",\"phone\":\"18200000\",\"otherPhone\":\"17900000\",\"default\":false},{\"isSchool\":false,\"family\":\"放松放松\",\"table\":\"防守打法\",\"username\":\"testfdsfds\",\"sex\":\"1\",\"phone\":\"1561111\",\"otherPhone\":\"1572222\",\"default\":false}]',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
