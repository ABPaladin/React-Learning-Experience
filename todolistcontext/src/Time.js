export default function Time() {
        const d = new Date();
        const localTime = d.getTime();
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
        const offset1 = 4; // UTC of Dubai is +04.00
        const dubai = utc + (3600000 * offset1);
        const dubaiTimeNow = new Date(dubai).toLocaleString();
        const offset2 = -5; // UTC of NYC is -05.00 
        const NYC = utc + (3600000 * offset2);
        const NYCTimeNow = new Date(NYC).toLocaleString();
        const offset3 = +9; // UTC of Tokyo is +09.00 
        const Tokyo = utc + (3600000 * offset3);
        const TokyoTimeNow = new Date(Tokyo).toLocaleString();
        const offset4 = +3; // UTC of Moldova is +03.00 
        const Moldova = utc + (3600000 * offset4);
        const MoldovaTimeNow = new Date(Moldova).toLocaleString();
    return (
        <div>
            <h1>DubaiTime:{dubaiTimeNow} Grade Celsius:31</h1>
            <h1>NYCTime:{NYCTimeNow} NYC Celsius:7</h1>
            <h1>TokyoTimeNow:{TokyoTimeNow} Tokyo Grade Celsius:19</h1>
            <h1>MoldovaTimeNow:{MoldovaTimeNow}Moldova Grade Celsius:3</h1>
        </div>
    )
}
