var Block={};
Block.EMPTY=0;
Block.BLOCK=1;
Block.WALL=2;
Block.NOBLOCK=99;
//4차원배열
Block.BlockType=[
[
				 [/////////짝대기
				 [0,0,0,0],
				 [1,1,1,1],
				 [0,0,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,1,0,0],
				 [0,1,0,0],
				 [0,1,0,0],
				 [0,1,0,0]
				 ],
				 [
				 [0,0,0,0],
				 [1,1,1,1],
				 [0,0,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,1,0,0],
				 [0,1,0,0],
				 [0,1,0,0],
				 [0,1,0,0]
				 ]
				 ],
				 [
				 [//개단1
				 [0,1,0,0],
				 [0,1,1,0],
				 [0,0,1,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,0,1,1],
				 [0,1,1,0],
				 [0,0,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,1,0,0],
				 [0,1,1,0],
				 [0,0,1,0],
				 [0,0,0,0]
				 ],
				 [[0,0,1,1],
				 [0,1,1,0],
				 [0,0,0,0],
				 [0,0,0,0]
				 ]
				 ],
				 [
				 [//계단2
				 [0,0,1,0],
				 [0,1,1,0],
				 [0,1,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,1,1,0],
				 [0,0,1,1],
				 [0,0,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,0,1,0],
				 [0,1,1,0],
				 [0,1,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,1,1,0],
				 [0,0,1,1],
				 [0,0,0,0],
				 [0,0,0,0]
				 ]
				 ],
				 [
				 [//기역
				 [0,1,1,0],
				 [0,0,1,0],
				 [0,0,1,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,0,0,1],
				 [0,1,1,1],
				 [0,0,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,1,0,0],
				 [0,1,0,0],
				 [0,1,1,0],
				 [0,0,0,0]
				 ],
				 [[0,1,1,1],
				 [0,1,0,0],
				 [0,0,0,0],
				 [0,0,0,0]
				 ]
				 ],
				 [
				 [//ㄴ 
				 [0,1,0,0],
				 [0,1,0,0],
				 [0,1,1,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,1,1,1],
				 [0,1,0,0],
				 [0,0,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,1,1,0],
				 [0,0,1,0],
				 [0,0,1,0],
				 [0,0,0,0]
				 ],
				 [[0,0,0,1],
				 [0,1,1,1],
				 [0,0,0,0],
				 [0,0,0,0]
				 ]
				 ],
				 [
				 [//ㅁ
				 [0,1,1,0],
				 [0,1,1,0],
				 [0,0,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,1,1,0],
				 [0,1,1,0],
				 [0,0,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,1,1,0],
				 [0,1,1,0],
				 [0,0,0,0],
				 [0,0,0,0]
				 ],
				 [[0,1,1,0],
				 [0,1,1,0],
				 [0,0,0,0],
				 [0,0,0,0]
				 ]
				 ],
				 [
				 [//ㅗ
				 [0,0,1,0],
				 [0,1,1,1],
				 [0,0,0,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,0,1,0],
				 [0,0,1,1],
				 [0,0,1,0],
				 [0,0,0,0]
				 ],
				 [
				 [0,0,0,0],
				 [0,1,1,1],
				 [0,0,1,0],
				 [0,0,0,0]
				 ],
				 [[0,0,1,0],
				 [0,1,1,0],
				 [0,0,1,0],
				 [0,0,0,0]
				 ]
				 ]


];


