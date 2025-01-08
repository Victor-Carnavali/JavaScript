var country = "US";
const locale = new Intl.Locale("br-latn", { region: "BR"});

console.log(`Living in ${country}`);

if (country == locale.region) {
    console.log(`You are brazilian `);
}
else {
    console.log(`You are ${country}`);
};