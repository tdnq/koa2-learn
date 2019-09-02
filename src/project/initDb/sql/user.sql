CREATE TABLE IF NOT EXISTS `user`(
    `id` INT NOT NULL AUTO_INCREMENT,           #用户ID
    `email` VARCHAR(255) DEFAULT NULL,
    `password` VARCHAR(255) DEFAULT NULL,
    `name` VARCHAR(255) DEFAULT NULL,
    `nick` VARCHAR(255) DEFAULT NULL,               #用户昵称
    `detail_info` LONGTEXT DEFAULT NULL,
    `create_time` VARCHAR(20) DEFAULT NULL,
    `modified_time` VARCHAR(20) DEFAULT NULL,
    `level` INT DEFAULT NULL,
    PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO user (email,password,name,nick,level) VALUES ('1@QQ.COM','12345','001','hello',12);
