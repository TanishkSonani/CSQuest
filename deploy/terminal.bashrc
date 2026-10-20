# Interactive Bash on the actual VM, using a dedicated unprivileged account.
if [[ -r /etc/bash.bashrc ]]; then
    source /etc/bash.bashrc
fi
HISTCONTROL=ignoreboth
HISTSIZE=5000
HISTFILESIZE=10000
shopt -s histappend checkwinsize
PS1='\u@\h:\w\$ '
if command -v dircolors >/dev/null 2>&1; then
    eval "$(dircolors -b)"
    alias ls='ls --color=auto'
fi
alias ll='ls -alF'
alias la='ls -A'
if [[ -r /usr/share/bash-completion/bash_completion ]]; then
    source /usr/share/bash-completion/bash_completion
fi
if [[ -r $HOME/.bashrc ]]; then
    source "$HOME/.bashrc"
fi
printf '\nLinux terminal on %s (%s)\n' "$(hostname)" "$(uname -m)"
printf 'You are at /. Try ls to explore the VM, or cd ~/linux-practice for exercises.\n'
printf 'Your home persists between sessions. System directories are read-only; sudo is unavailable.\n\n'
