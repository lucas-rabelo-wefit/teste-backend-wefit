-- CreateTable
CREATE TABLE `sellers` (
    `id` VARCHAR(191) NOT NULL,
    `document` VARCHAR(191) NOT NULL,
    `type_document` VARCHAR(191) NOT NULL DEFAULT 'PF',
    `name` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `address_code` VARCHAR(191) NOT NULL,
    `address_street` VARCHAR(191) NOT NULL,
    `address_number` INTEGER NOT NULL,
    `address_complement` VARCHAR(191) NULL,
    `address_city` VARCHAR(191) NOT NULL,
    `address_neighborhood` VARCHAR(191) NOT NULL,
    `address_state` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `sellers_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
