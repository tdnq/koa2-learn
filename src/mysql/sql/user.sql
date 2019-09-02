CREATE TABLE IF NOT EXISTS `user`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) DEFAULT NULL,
    `password` VARCHAR(255) DEFAULT NULL,
    `name` VARCHAR(255) DEFAULT NULL,
    `nick` VARCHAR(255) DEFAULT NULL,
    `detail_info` VARCHAR(20) DEFAULT NULL,
    `create_time` VARCHAR(20) DEFAULT NULL,
    `modified_time` VARCHAR(20) DEFAULT NULL,
    `level` INT DEFAULT NULL,
    PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `user` set email='1@qq.com',password='11';
INSERT INTO `user` set email='2@qq.com',password='22';
INSERT INTO `user` set email='3@qq.com',password='33';
