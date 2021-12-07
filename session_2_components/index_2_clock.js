  class Clock{
    $container;
    $time;
    $btnStart;
    $btnPause;
    $btnStop;

    seconds;
    timeInterval;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('clock');

        this.$time = document.createElement('span');
        this.$time.classList.add('clock_time');
        this.$time.innerHTML = '00:00';

        this.$btnStart = document.createElement('button');
        this.$btnStart.classList.add('clock_btnStart');
        this.$btnStart.innerHTML = `Start`;
        this.$btnStart.addEventListener('click', this.start);

        this.$btnPause = document.createElement('button');
        this.$btnPause.classList.add('clock_btnPause');
        this.$btnPause.innerHTML = `Pause`;
        this.$btnPause.addEventListener('click', this.pause);

        this.$btnStop = document.createElement('button');
        this.$btnStop.classList.add('clock_btnStop');
        this.$btnStop.innerHTML = `Stop`;
        this.$btnStop.addEventListener('click', this.stop);

        this.seconds = 0;
        this.timeInterval = null;

    }

    start = () =>{
        if(this.timeInterval){
            return
        }
        this.timeInterval = setInterval(()=>{
            this.seconds++;
            this.updateTime();

        }, 1000);
    }

    pause = () =>{
        if(this.timeInterval){
            clearInterval(this.timeInterval);
        }
    }

    stop = () =>{
        if(this.timeInterval){
            clearInterval(this.timeInterval);
        }
        this.seconds = 0;
        this.updateTime();
    }

    updateTime = () =>{
        const m = Math.floor(this.seconds / 60);
        const s = Math.floor(this.seconds % 60);
        this.$time.innerHTML = m + ':' + s;
    }

    render(){
        this.$container.appendChild(this.$time);
        this.$container.appendChild(this.$btnStart);
        this.$container.appendChild(this.$btnPause);
        this.$container.appendChild(this.$btnStop);
        return this.$container;
    }
  }