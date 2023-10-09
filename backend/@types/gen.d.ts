type PrimaryKey<T>  = T;

type ModelActionProperties<T> = {
    where: { 
        [Key in keyof T]?: T[Key]
     }
}

/**
 * Makes every type field optional
 */
type Optional<T> = {
    [Key in keyof T]?: T[Key]
}