export default class EightQueen {
    size: number
    constructor(_size: number) {
        this.size = _size
    }
    getSolutions(): String[] {
        const solutions: String[] = []
        const lineRecords: number[] = []
        let successCount = 0
        for (let i = 0; i < this.size; i++) {
            if (this.checkQueen(lineRecords, i)) {
                lineRecords.push(i);
                if (lineRecords.length == this.size) {
                    const solution: String = this.getSolutionString(lineRecords)
                    successCount ++ 
                    solutions.push(solution)
                } else {
                    // 已找到但尚未到最後一排, 從頭找下一排
                    i = -1
                }
            }
            while(lineRecords.length == this.size /*已找到*/|| (lineRecords.length > 0 && i == this.size - 1)/*該排找不到*/){
                //回上一層繼續往後找
                i = lineRecords.pop()!!
            }
        } 
        return solutions
    }
    
    private checkQueen(lineRecords: number[], putIndex: number) {
        let putLevel: number = lineRecords.length
        for (let level = 0 ; level < putLevel ; level ++){
            let index = lineRecords[level]
            if (putIndex==index) {
                return false;
            }
            else if ((level+index)==(putLevel+putIndex)) {
                // 左下自己層數加位置等於其他層數相加位置
                return false;
            }
            else if ((level-index)==(putLevel-putIndex)){
                //右下自己層數減位置等於其他層數減位置
                return false;
            }
        }
        return true
    }
    private getSolutionString (lineRecords: number[]): String {     
        const lines = lineRecords.map(element => Array<number>(this.size)
                .fill(0)
                .map((value, index)=> element == index ? "Q" : ".")
                .join("")
        )
        return lines.join("\n")
    }
}


