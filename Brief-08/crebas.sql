/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de création :  26/04/2020 21:14:47                      */
/*==============================================================*/

CREATE DATABASE Location;

use Location;

/*===========*/

drop table if exists ADMIN;

drop table if exists CLIENT;

drop table if exists PRODUIT;

drop table if exists RESERVATION;

/*==============================================================*/
/* Table : ADMIN                                                */
/*==============================================================*/
create table ADMIN
(
   MATRICULE            varchar(250) not null,
   NOM                  varchar(250),
   PRENOM               varchar(250),
   AGE                  int,
   EMAIL                varchar(250),
   primary key (MATRICULE)
);

/*==============================================================*/
/* Table : CLIENT                                               */
/*==============================================================*/
create table CLIENT
(
   ID_CLIENT            int not null,
   DATE_PERMIS          datetime,
   NOM                  varchar(250),
   PRENOM               varchar(250),
   AGE                  int,
   EMAIL                varchar(250),
   primary key (ID_CLIENT)
);

/*==============================================================*/
/* Table : PRODUIT                                              */
/*==============================================================*/
create table PRODUIT
(
   ID_PRODUIT           int not null,
   MATRICULE            varchar(250) not null,
   NOM_PRODUIT          varchar(250),
   ETATS                bool,
   primary key (ID_PRODUIT)
);

/*==============================================================*/
/* Table : RESERVATION                                          */
/*==============================================================*/
create table RESERVATION
(
   ID_RESERVATION       int not null,
   ID_PRODUIT           int not null,
   ID_CLIENT            int not null,
   DUREE                int,
   NBR_PERSONNE         int,
   primary key (ID_RESERVATION)
);

alter table PRODUIT add constraint FK_AJOUTE foreign key (MATRICULE)
      references ADMIN (MATRICULE) on delete restrict on update restrict;

alter table RESERVATION add constraint FK_CONTIENT foreign key (ID_PRODUIT)
      references PRODUIT (ID_PRODUIT) on delete restrict on update restrict;

alter table RESERVATION add constraint FK_RESERVE foreign key (ID_CLIENT)
      references CLIENT (ID_CLIENT) on delete restrict on update restrict;
      
/* User Creation */
CREATE USER 'Reda'@'localhost' IDENTIFIED BY 'somepassword';
GRANT ALL PRIVILEGES ON Location TO 'Reda'@'localhost';
SELECT User, Host FROM mysql.user;

/* Insert */
insert into ADMIN (`MATRICULE`,`NOM`,`PRENOM`,`AGE`,`EMAIL`) values (5, 'someone', 'fate5', 20, "test5@gmail.com"),(3, 'someone2', 'fate2', 20, "test2@gmail.com"),(4, 'someone3', 'fate3', 20, "test3@gmail.com");

/* Delete */
DELETE FROM ADMIN WHERE Prenom = 'fate';

/* Update */
UPDATE ADMIN SET email = 'update@gmail.com' WHERE MATRICULE = 5;

select * from ADMIN