const download = require('download-git-repo') // 执行git clone拉代码: https://www.npmjs.com/package/download-git-repo
const fs = require('fs')
const path = require('path')

const execFile = require('child_process').execFile;


function exec (url) {
    return new Promise((resolve, reject) => {
        execFile('git', ['ls-remote', '-h', url], function(err, stdout, stderr) {
            if(err !== null) {
                return reject(err);
            }
            const lines = stdout.split('\n');
            const arr = []
            for(let i = 0; i < lines.length - 1; i++) {
                const line = lines[i].split('\t');
                arr.push(line[1].replace('refs/heads/', ''))
            }
            resolve(arr);
        });
    })
}

const gitCloneFn = (git, tplName) => {
    return new Promise((resolve, reject) => {
        // before git clone, delete old
        // fs.rmdirSync(path.resolve(tplName), {
        //   recursive: true
        // })
        download('direct:' + git, tplName, { clone: true }, function (err) {
            const msg = `拉取最新${git}: `
            if (err) {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject(`${msg}: Error: ${err}`)
            } else {
                resolve(`${msg}: Success`)
            }
        })
    })
}

async function getRemote (url) {
    let res = await exec(url)
    return res.map(val => {
        return {
            key: val,
            git: `${url}#${val}`
        }
    })
}

module.exports = {
    getRemote,
    gitCloneFn
}
