export const auth = (req, res, next) => {
    if (req.session?.user?.role !== "admin") {
        if (req.session.user) {
            return res.redirect("/profile");
        } else {
            return res.redirect("/");
        }
    }
    next();
}
