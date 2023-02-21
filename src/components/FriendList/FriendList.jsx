import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(el => {
                return (
                    <li className={css.item}>
                        {el.isOnline ?
                           ( <span className={css.statusOnline}>{el.isOnline}</span>)
                            : (<span className={css.statusOffline}>{el.isOnline}</span>)
                         
                        }
                        <img className={css.avatar} src={el.avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{el.name}</p>
                    </li>
                )
            })

            }
</ul>
    )
}

