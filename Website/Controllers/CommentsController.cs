using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Website.Models;
using Microsoft.AspNet.Identity;

namespace Website.Controllers
{
    public class CommentsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Comments/Index
        [Authorize(Roles = "Admin,Moderator")]
        public ActionResult Index(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ViewBag.PostId = id;
            return View(db.Posts.Find(id).Comments.ToList());

            //string text = "this is the text";
            //var matches = db.Posts.Where(p => p.Body.Contains(text)).ToList();
        }


        // GET: Comments/Details/5
        [Authorize(Roles = "Admin,Moderator")]
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            return View(comment);
        }

        // GET: Comments/Create
        [Authorize]
        public ActionResult Create(int id)
        {
            //ViewBag.AuthorId = new SelectList(db.ApplicationUsers, "Id", "FirstName");
            return View(new Comment { PostId = id });
        }

        // POST: Comments/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //[ValidateAntiForgeryToken]
        [Authorize]
        public string Create(int PostId, string CommentBody)
        {
            if (ModelState.IsValid)
            {
                Comment comment = new Comment();
                comment.AuthorId = User.Identity.GetUserId();
                comment.Created = DateTimeOffset.Now;
                comment.Body = CommentBody;

                db.Posts.Find(PostId).Comments.Add(comment);
                
                db.SaveChanges();
                return "Your comment was successfully saved.";
            }
            return "There was a problem submitting your comment.  Please try again.";

        }

        // GET: Comments/Edit/5
        [Authorize(Roles = "Admin,Moderator")]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            //ViewBag.AuthorId = new SelectList(db.ApplicationUsers, "Id", "FirstName", comment.AuthorId);
            ViewBag.PostId = new SelectList(db.Posts, "Id", "Title", comment.PostId);
            return View(comment);
        }

        // POST: Comments/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Admin,Moderator")]
        public ActionResult Edit([Bind(Include = "Id,PostId,Body,UpdateReason")] Comment comment)
        {
            if (ModelState.IsValid)
            {
                var RealComment = db.Comments.Find(comment.Id);

                RealComment.Body = comment.Body;
                RealComment.Updated = DateTimeOffset.Now;
                RealComment.UpdateReason += comment.UpdateReason + "\n\n";


                db.Comments.Add(RealComment);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            // ViewBag.AuthorId = new SelectList(db.ApplicationUsers, "Id", "FirstName", comment.AuthorId);
            ViewBag.PostId = new SelectList(db.Posts, "Id", "Title", comment.PostId);
            return View(comment);
        }

        // GET: Comments/Delete/5
        [Authorize(Roles = "Admin,Moderator")]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            return View(comment);
        }

        // POST: Comments/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Admin,Moderator")]
        public ActionResult DeleteConfirmed(int id)
        {
            Comment comment = db.Comments.Find(id);
            db.Comments.Remove(comment);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
