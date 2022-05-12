import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // private을 사용한 이유 -> 다른 component에서 boards 사용 불가

  getAllBoards(): Board[] {
    return this.boards;
  }
}
