/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de création :  5/12/2020 1:28:17 PM                     */
/*==============================================================*/


drop table if exists ADMIN;

drop table if exists CATEGORIE;

drop table if exists CLIENT;

drop table if exists COMMANDE;

drop table if exists CONTENIR;

drop table if exists PANIER_FIXE;

drop table if exists PAYEMENT;

drop table if exists PRODUIT;

drop table if exists TYPE_PAYEMENT;

/*==============================================================*/
/* Table : ADMIN                                                */
/*==============================================================*/
create table ADMIN
(
   MATRICULE            varchar(250) not null,
   PASSWORD             varchar(250),
   primary key (MATRICULE)
);

/*==============================================================*/
/* Table : CATEGORIE                                            */
/*==============================================================*/
create table CATEGORIE
(
   MATRICULE            varchar(250) not null,
   ID_CAT               int,
   DESCR              varchar(250)
);

/*==============================================================*/
/* Table : CLIENT                                               */
/*==============================================================*/
create table CLIENT
(
   ID                   varchar(250) not null,
   NOM                  varchar(250),
   PRENOM               varchar(250),
   EMAIL                varchar(250),
   PASSWORD             varchar(250),
   primary key (ID)
);

/*==============================================================*/
/* Table : COMMANDE                                             */
/*==============================================================*/
create table COMMANDE
(
   ID_COMMANDE          int not null,
   ID                   varchar(250) not null,
   DATE_COMMANDE        timestamp,
   primary key (ID_COMMANDE)
);

/*==============================================================*/
/* Table : CONTENIR                                             */
/*==============================================================*/
create table CONTENIR
(
   ID_PRD               int not null,
   ID_COMMANDE          int not null,
   QTE                  float,
   primary key (ID_PRD, ID_COMMANDE)
);

/*==============================================================*/
/* Table : PANIER_FIXE                                          */
/*==============================================================*/
create table PANIER_FIXE
(
   MATRICULE            varchar(250) not null,
   ID_COMMANDE          int not null,
   ID_PANIER            int,
   DATE_PANIER          date
);

/*==============================================================*/
/* Table : PAYEMENT                                             */
/*==============================================================*/
create table PAYEMENT
(
   ID                   varchar(250) not null,
   ID_PAYEMENT          int not null,
   ID_PAYMENT           int,
   NUM_CART             int,
   DATE_EXP             datetime
);

/*==============================================================*/
/* Table : PRODUIT                                              */
/*==============================================================*/
create table PRODUIT
(
   ID_PRD               int not null,
   MATRICULE            varchar(250) not null,
   NOM                  varchar(250),
   QTE_MAX              float,
   IMAGE                longblob,
   Id_cat               int,
   primary key (ID_PRD)
);

/*==============================================================*/
/* Table : TYPE_PAYEMENT                                        */
/*==============================================================*/
create table TYPE_PAYEMENT
(
   ID_PAYEMENT          int not null,
   DESCR              varchar(250),
   primary key (ID_PAYEMENT)
);

alter table CATEGORIE add constraint FK_CREER foreign key (MATRICULE)
      references ADMIN (MATRICULE) on delete restrict on update restrict;

alter table COMMANDE add constraint FK_PASSER foreign key (ID)
      references CLIENT (ID) on delete restrict on update restrict;

alter table CONTENIR add constraint FK_CONTENIR foreign key (ID_COMMANDE)
      references COMMANDE (ID_COMMANDE) on delete restrict on update restrict;

alter table CONTENIR add constraint FK_CONTENIR2 foreign key (ID_PRD)
      references PRODUIT (ID_PRD) on delete restrict on update restrict;

alter table PANIER_FIXE add constraint FK_CONSTITUER foreign key (ID_COMMANDE)
      references COMMANDE (ID_COMMANDE) on delete restrict on update restrict;

alter table PANIER_FIXE add constraint FK_CREER_PANIER foreign key (MATRICULE)
      references ADMIN (MATRICULE) on delete restrict on update restrict;

alter table PAYEMENT add constraint FK_EFFECTUER foreign key (ID)
      references CLIENT (ID) on delete restrict on update restrict;

alter table PAYEMENT add constraint FK_REGLER foreign key (ID_PAYEMENT)
      references TYPE_PAYEMENT (ID_PAYEMENT) on delete restrict on update restrict;

alter table PRODUIT add constraint FK_AJOUTE foreign key (MATRICULE)
      references ADMIN (MATRICULE) on delete restrict on update restrict;
      
alter table PRODUIT add constraint FK_AJoute2 foreign key (Id_cat)
      references CATEGORIE (ID_CAT) on delete restrict on update restrict;

