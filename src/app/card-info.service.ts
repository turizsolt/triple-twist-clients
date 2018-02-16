import { Injectable } from '@angular/core';

declare const enum CardType{
  Joker = 0,
  HalfPoint = 1,
  ExtraTime = 2,
  DoubleChance = 3,
  SkipIt = 4,
  Advance = 5,
  Assist = 6,
  Freezer = 7,
  RoleCast = 8,
  CocoaSnail = 9,
  SwapBug = 10,
  IamRight = 11,
  Boooring = 12
}

export class CardInfoService {

  public static getSymbol(_type:CardType):string{
    switch(_type){
      case CardType.Joker: return 'J';
      case CardType.HalfPoint: return '.5';
      case CardType.ExtraTime: return ':30';
      case CardType.DoubleChance: return '2:1';
      case CardType.SkipIt: return '>>';
      case CardType.Advance: return '++';
      case CardType.Assist: return 'Sj';
      case CardType.Freezer: return '[]';
      case CardType.RoleCast: return '(x)';
      case CardType.CocoaSnail: return '@';
      case CardType.SwapBug: return 'Cs';
      case CardType.IamRight: return '1';
      case CardType.Boooring: return ':!';
    }
  }

  public static getTitle(_type:CardType):string{
    switch(_type){
      case CardType.Joker: return 'Joker';
      case CardType.HalfPoint: return 'Felező';
      case CardType.ExtraTime: return 'Időkérés';
      case CardType.DoubleChance: return 'Dupla esély';
      case CardType.SkipIt: return 'Kihagynánk';
      case CardType.Advance: return 'Előny';
      case CardType.Assist: return 'Segítő jobb';
      case CardType.Freezer: return 'Fagyasztó';
      case CardType.RoleCast: return 'Szereposztás';
      case CardType.CocoaSnail: return 'Kakaóstekercs';
      case CardType.SwapBug: return 'Cserebogár';
      case CardType.IamRight: return 'Igazam van!';
      case CardType.Boooring: return 'Uuuuncsi!';
    }
  }
}
