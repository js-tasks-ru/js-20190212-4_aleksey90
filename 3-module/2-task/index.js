let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;
    return {
        next() {
            if (current.getTime() >= last.getTime()) {
                return {
                    done: true
                };
            }    
            current.setDate(current.getDate() + 1);
            let str = ('0'+current.getDate()).slice(-2);
            if (current.getDay() === 0 || current.getDay() === 6) {
                str = `[${str}]`;
            }
            return {
                done: false,
                value: str
            };
        }
    }
};


