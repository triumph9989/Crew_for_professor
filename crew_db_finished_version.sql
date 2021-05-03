-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: crew_db
-- ------------------------------------------------------
-- Server version	8.0.13

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
-- Table structure for table `a`
--

DROP TABLE IF EXISTS `a`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `a` (
  `a_id` int(11) NOT NULL,
  `tid` int(11) DEFAULT NULL,
  `crew_name` varchar(45) DEFAULT NULL,
  `car` varchar(45) DEFAULT NULL,
  `crew_img` varchar(45) DEFAULT NULL,
  `car_img` varchar(45) DEFAULT NULL,
  `instruction` varchar(225) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`a_id`),
  KEY `fa_idx` (`tid`),
  CONSTRAINT `fa` FOREIGN KEY (`tid`) REFERENCES `team` (`tid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `a`
--

LOCK TABLES `a` WRITE;
/*!40000 ALTER TABLE `a` DISABLE KEYS */;
INSERT INTO `a` VALUES (0,0,'Ferrari','c-300','/img/members/clc.jpg','/img/members/cl.jpg','夏爾·勒克萊爾（法語：Charles Leclerc，1997年10月16日－）是一位摩納哥一級方程式車手，目前效力於法拉利車隊；他也曾是法拉利車手學院的成員之一。他在2016年和2017年分別贏得了GP3系列賽和F2的車手冠軍。','Charles Leclerc'),(1,0,'Tom','s-500','/img/members/csjc.jpg','/img/members/csj.jpg','小卡洛斯·塞恩斯（西班牙語：Carlos Sainz Jr.，1994年9月1日－），出生於西班牙馬德里，是一位西班牙一級方程式賽車車手，目前效力於法拉利車隊。他是兩屆世界拉力錦標賽冠軍卡洛斯·塞恩斯之子。','Carlos Sainz Jr.');
/*!40000 ALTER TABLE `a` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `b`
--

DROP TABLE IF EXISTS `b`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `b` (
  `b_id` int(11) NOT NULL,
  `tid` int(11) DEFAULT NULL,
  `crew_name` varchar(45) DEFAULT NULL,
  `car` varchar(45) DEFAULT NULL,
  `crew_img` varchar(45) DEFAULT NULL,
  `car_img` varchar(45) DEFAULT NULL,
  `instruction` varchar(225) DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`b_id`),
  KEY `fb_idx` (`tid`),
  CONSTRAINT `fb` FOREIGN KEY (`tid`) REFERENCES `team` (`tid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `b`
--

LOCK TABLES `b` WRITE;
/*!40000 ALTER TABLE `b` DISABLE KEYS */;
INSERT INTO `b` VALUES (0,1,'McLaren','R6','/img/members/drc.jpg','/img/members/dr.jpg','丹尼爾·尼卡道（英語：Daniel Ricciardo，1989年7月1日－）是一名義裔澳籍的一級方程式賽車車手，目前效力於麥拉倫車隊。曾效力雷諾車隊。[2]他曾獲得2009年賽季英國三級方程式錦標賽的冠軍。','Daniel Ricciardo'),(1,1,'Benny','R5','/img/members/lnc.jpg','/img/members/ln.jpg','蘭多·諾里斯（英語：Lando Norris，1999年11月13日－）是一位英國賽車手，現為一級方程式麥拉倫車隊的車手。他曾經為卡林車隊出賽國際汽聯二級方程式錦標賽。','Lando Norris');
/*!40000 ALTER TABLE `b` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `c`
--

DROP TABLE IF EXISTS `c`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `c` (
  `c_id` int(11) NOT NULL,
  `tid` int(11) DEFAULT NULL,
  `crew_name` varchar(45) DEFAULT NULL,
  `car` varchar(45) DEFAULT NULL,
  `crew_img` varchar(45) DEFAULT NULL,
  `car_img` varchar(45) DEFAULT NULL,
  `instruction` varchar(225) DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`c_id`),
  KEY `fc_idx` (`tid`),
  CONSTRAINT `fc` FOREIGN KEY (`tid`) REFERENCES `team` (`tid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `c`
--

LOCK TABLES `c` WRITE;
/*!40000 ALTER TABLE `c` DISABLE KEYS */;
INSERT INTO `c` VALUES (1,2,'Mercedes-AMG','R5','/img/members/Lewis-Hamiltons-Car.jpg','/img/members/LewisHamilton.jpg','路易斯·卡爾·大衛遜·漢米爾頓爵士，MBE，FREng（英語：Sir Lewis Carl Davidson Hamilton，1985年1月7日－）是一位英國一級方程式賽車車手，目前效力於梅賽德斯車隊。擁有七座一級方程式賽車世界冠軍的漢米爾頓被視為是目前最優秀的車手。','Sir Lewis Carl Davidson Hamilton'),(2,2,'Chubby','R5','/img/members/mgr.jpg','/img/members/George-Russell.jpg','喬治·羅素（英語：George Russell，1998年2月15日－）是一名英國賽車手，現為一級方程式威廉斯車隊的車手。','George Russell'),(3,2,'Rocky','R5','/img/members/vbc.jpg','/img/members/vb.jpg','維爾特利·維克托·鮑達斯（芬蘭語：Valtteri Viktor Bottas，1989年8月28日－），生於芬蘭納斯托拉，芬蘭一級方程式車手，2013年至2016年效力於威廉斯車隊，現效力於梅賽德斯車隊。他現在居住在摩納哥。','Valtteri Viktor Bottas');
/*!40000 ALTER TABLE `c` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `d`
--

DROP TABLE IF EXISTS `d`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `d` (
  `d_id` int(11) NOT NULL,
  `tid` int(11) DEFAULT NULL,
  `crew_name` varchar(45) DEFAULT NULL,
  `car` varchar(45) DEFAULT NULL,
  `crew_img` varchar(45) DEFAULT NULL,
  `car_img` varchar(45) DEFAULT NULL,
  `instruction` varchar(225) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`d_id`),
  KEY `fd_idx` (`tid`),
  CONSTRAINT `fd` FOREIGN KEY (`tid`) REFERENCES `team` (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `d`
--

LOCK TABLES `d` WRITE;
/*!40000 ALTER TABLE `d` DISABLE KEYS */;
INSERT INTO `d` VALUES (1,3,'alonso','L-STAR','/img/members/alonso1.jfif','/img/members/Alonso.jpg','費爾南多·阿隆索·迪亞斯（西班牙語：Fernando Alonso Díaz，1981年7月29日－），生於西班牙阿斯圖里亞斯奧維耶多，西班牙著名F1車手，目前效力於阿爾派車隊。2005年及2006年F1世界車手冠軍。','Fernando Alonso Díaz'),(2,3,'ocon','R99','/img/members/ocon.jfif','/img/members/Ocon.jpg','埃斯特班·奧康（法語：Esteban Ocon，1996年9月17日－）是一位法國賽車手。他因為在2016年比利時大獎賽頂替馬諾車隊的里奧·哈里恩多，而首度登上一級方程式賽場。','Esteban Ocon');
/*!40000 ALTER TABLE `d` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `team` (
  `tid` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `introduction` varchar(225) DEFAULT NULL,
  `country` varchar(225) DEFAULT NULL,
  `badge` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (0,'Ferrari','法拉利車隊是汽車製造商法拉利旗下的賽事部門以及參與一級方程式賽車的車隊。自1950年起，法拉利車隊就參與一級方程式的比賽，是現存資歷最老的車隊之一。車隊是由恩佐·法拉利創立。一直到1947年才開始製造自己品牌的汽車。除了一級方程式賽事外，法拉利也在世界跑車錦標賽，利曼24小時耐力賽，斯帕24小時耐力賽，戴通納24小時耐力賽和錫布靈12小時耐力賽中取得勝利。','/img/members/Italy.png','/img/members/Ferrari_Logo.png'),(1,'McLaren','麥拉倫一級方程式車隊是一級方程式賽車中最為成功的車隊之一，由布魯斯·麥克拉倫（1937年－1970年）於1963年建立。基地位於英國沃金。它同時也參加印地500、加拿大-美國挑戰杯以及利曼24小時耐力賽。','/img/members/uk.png','/img/members/McLaren_logo.png'),(2,'Mercedes-AMG','梅賽德斯AMG國油賽車F1車隊（英語：Mercedes AMG Petronas Motorsport）是一個2009年時成立的一級方程式車隊，其前身為車隊領隊羅斯·布朗創立並參加2009年世界一級方程式錦標賽的布朗車隊','/img/members/uk.png','/img/members/Benz_logo.png'),(3,'Alpine','阿爾派F1車隊是法國一級方程式賽車隊和製造商。這是法國汽車公司雷諾集團旗下的一級方程式車隊。集團計劃在2021年世界一級方程式錦標賽中將「雷諾」改名為「阿爾派」，以推廣阿爾派汽車品牌。即使車隊更改了隊名，但是阿爾派F1車隊在技術上仍是雷諾的車隊，因為事實上阿爾派是雷諾的姊妹品牌。','/img/members/uk.png','/img/members/Alpine_logo.png');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-03 15:37:30
