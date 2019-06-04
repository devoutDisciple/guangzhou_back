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
-- Table structure for table `evaluate`
--

DROP TABLE IF EXISTS `evaluate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `evaluate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopid` int(11) DEFAULT NULL,
  `orderid` int(11) DEFAULT NULL COMMENT '订单id',
  `openid` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL COMMENT '用户名称',
  `avatarUrl` varchar(800) DEFAULT NULL COMMENT '用户头像',
  `desc` varchar(45) DEFAULT NULL,
  `shop_grade` varchar(45) DEFAULT NULL COMMENT '评分 1-5',
  `sender_grade` varchar(45) DEFAULT NULL COMMENT '骑手 评分 1-5',
  `create_time` varchar(45) DEFAULT NULL,
  `is_delete` int(11) NOT NULL DEFAULT '1' COMMENT '1 存在 2删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COMMENT='评价';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluate`
--

LOCK TABLES `evaluate` WRITE;
/*!40000 ALTER TABLE `evaluate` DISABLE KEYS */;
INSERT INTO `evaluate` VALUES (18,1,64,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibwnzh0pHtTsXFNbFcdnaWW2MztibPkwQ6ZSYpxuPjV30rfXGbxrkiaMxGPAQWyycO9vV2A4lD52Qg/132','123','5','3','1559467445972',1),(19,1,65,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibwnzh0pHtTsXFNbFcdnaWW2MztibPkwQ6ZSYpxuPjV30rfXGbxrkiaMxGPAQWyycO9vV2A4lD52Qg/132','风发的撒','5','4','1559471321245',1),(20,2,66,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibwnzh0pHtTsXFNbFcdnaWW2MztibPkwQ6ZSYpxuPjV30rfXGbxrkiaMxGPAQWyycO9vV2A4lD52Qg/132','哈哈哈哈','3','4','1559471453204',1),(21,2,67,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibwnzh0pHtTsXFNbFcdnaWW2MztibPkwQ6ZSYpxuPjV30rfXGbxrkiaMxGPAQWyycO9vV2A4lD52Qg/132','反倒是','5','4','1559481185034',1),(22,1,71,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibwnzh0pHtTsXFNbFcdnaWW2MztibPkwQ6ZSYpxuPjV30rfXGbxrkiaMxGPAQWyycO9vV2A4lD52Qg/132','ghj','5','4','1559482336512',1),(23,1,74,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibwnzh0pHtTsXFNbFcdnaWW2MztibPkwQ6ZSYpxuPjV30rfXGbxrkiaMxGPAQWyycO9vV2A4lD52Qg/132','很好，很好吃','5','4','1559484657379',1),(24,1,75,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibwnzh0pHtTsXFNbFcdnaWW2MztibPkwQ6ZSYpxuPjV30rfXGbxrkiaMxGPAQWyycO9vV2A4lD52Qg/132','第三方','5','3','1559488171371',1),(25,1,73,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibwnzh0pHtTsXFNbFcdnaWW2MztibPkwQ6ZSYpxuPjV30rfXGbxrkiaMxGPAQWyycO9vV2A4lD52Qg/132','反倒是','5','4','1559489482202',1),(26,1,77,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibwnzh0pHtTsXFNbFcdnaWW2MztibPkwQ6ZSYpxuPjV30rfXGbxrkiaMxGPAQWyycO9vV2A4lD52Qg/132','hello','5','3','1559568973370',1),(27,1,76,'oah4447vOWQegN1z544JfDtqbZuY','「？....！』','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibwnzh0pHtTsXFNbFcdnaWW2MztibPkwQ6ZSYpxuPjV30rfXGbxrkiaMxGPAQWyycO9vV2A4lD52Qg/132','','2','3','1559569005474',1);
/*!40000 ALTER TABLE `evaluate` ENABLE KEYS */;
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
