<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230310155716 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, question LONGTEXT NOT NULL, answer TINYINT(1) NOT NULL, explanation LONGTEXT NOT NULL, sources LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category_category (category_source INT NOT NULL, category_target INT NOT NULL, INDEX IDX_B1369DBA5062B508 (category_source), INDEX IDX_B1369DBA4987E587 (category_target), PRIMARY KEY(category_source, category_target)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE category_category ADD CONSTRAINT FK_B1369DBA5062B508 FOREIGN KEY (category_source) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE category_category ADD CONSTRAINT FK_B1369DBA4987E587 FOREIGN KEY (category_target) REFERENCES category (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category_category DROP FOREIGN KEY FK_B1369DBA5062B508');
        $this->addSql('ALTER TABLE category_category DROP FOREIGN KEY FK_B1369DBA4987E587');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE category_category');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
