class Log{constructor(t){this.el=t,this._default=""}info(t){this.el.text(t)}error(t){this.el.text(t)}default(t){void 0!==t&&(this._default=t),this.el.text(this._default)}}export{Log};