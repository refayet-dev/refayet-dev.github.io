export interface Position {
  x: number;
  y: number;
}

export interface CursorProps {
  position: Position;
  isPointer?: boolean;
  theme?: string;
}