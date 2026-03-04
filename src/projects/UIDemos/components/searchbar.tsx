import styles from "./searchbar.module.css"
interface SearchBarProps {
    value?: string;
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export default function SearchBar({
    value, 
    // onChange,
     placeholder = "搜尋你感興趣的文章"
}: SearchBarProps) {
    return (
        <>
            <div className={styles.searchbar}>
                <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
                <input 
                type="text" 
                className={styles.searchbox}
                value={value}
                // onChange={onChange}
                placeholder={placeholder}
                />
            </div></>
    )
}
