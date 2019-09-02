CREATE TABLE IF NOT EXISTS `data`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `data_info` json DEFAULT NULL,
    `create_time` varchar(20) DEFAULT NULL,
    `modified_time` varchar(20) DEFAULT NULL,
    `level` INT DEFAULT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;